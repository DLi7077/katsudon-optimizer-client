import React, { useEffect, useRef, useState } from "react";
import useOptimizeControl from "../../Hooks/useOptimizeControl";
import Header from "./Header";
import "./styles.css";
import { createRequest, fetchRequest } from "../../Api/optimize";
import { get } from "lodash";
import {
  finalizedBonusStatGains,
  finalizedCharacterStats,
  finalizedEnemyStats,
  finalizedTalentScalings,
} from "../../Utils/Optimize";
import StartingStats from "./StartingStats";

export default function Optimizer() {
  const {
    // character
    characterStats,
    updateCharacterStats,
    // talent scaling
    talentScalings,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
    // bonus stat gains
    bonusStatGains,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
    // buff gains
    buffCollections,
    addBuffCollection,
    removeBuffCollection,
    changeBuffCollectionName,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
    // enemy
    enemyStats,
    updateEnemyStat,
  } = useOptimizeControl();

  const [requestId, setRequestId] = useState(null);
  const [result, setResult] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);

  const intervalRef = useRef(null);

  // creates the optimize request
  async function createOptimizeRequest() {
    const finalCharacterStats = finalizedCharacterStats(
      characterStats,
      buffCollections
    );
    const finalTalentScalings = finalizedTalentScalings(talentScalings);
    const finalBonusStatGains = finalizedBonusStatGains(bonusStatGains);
    const finalEnemyStats = finalizedEnemyStats(enemyStats);

    console.table(finalCharacterStats);
    console.table(finalTalentScalings);
    console.table(finalBonusStatGains);
    console.table(finalEnemyStats);

    const requestPayload = {
      character: {
        stats: finalCharacterStats,
        talent_scalings: finalTalentScalings,
        bonus_stat_gain: finalBonusStatGains,
      },
      enemy: finalEnemyStats,
      stat_preferences: {
        substats: [
          "Flat Attack",
          "ATK %",
          "Elemental Mastery",
          "Energy Recharge%",
          "Crit Damage",
        ],
        flower_main_stats: ["Flat HP"],
        feather_main_stats: ["Flat Attack"],
        sands_main_stats: ["ATK %", "Energy Recharge%"],
        goblet_main_stats: ["Electro DMG Bonus%", "ATK %"],
        circlet_main_stats: ["ATK %", "Crit Damage"],
      },
    };

    await createRequest(requestPayload)
      .then((createdRequest) => {
        setRequestId(get(createdRequest, "_id"));
        setResult(null);
        setRequestStatus(get(createdRequest, "status"));
        console.log(createdRequest);
      })
      .catch(() => {
        console.error("could not create a request");
      });
  }
  // checks request status every 2 seconds
  async function waitForResult() {
    clearInterval(intervalRef.current);
    if (requestStatus === "complete") return;

    intervalRef.current = setInterval(async () => {
      await fetchRequest(requestId).then((request) => {
        setRequestStatus(get(request, "status"));
        setResult(get(request, "result") ?? null);
      });
    }, 2000);
  }

  // store to local storage on change
  useEffect(() => {
    localStorage.setItem("enemy-stats", JSON.stringify(enemyStats));
  }, [enemyStats]);

  useEffect(() => {
    localStorage.setItem("character-stats", JSON.stringify(characterStats));
  }, [characterStats]);

  useEffect(() => {
    localStorage.setItem("buff-collections", JSON.stringify(buffCollections));
  }, [buffCollections]);

  useEffect(() => {
    localStorage.setItem("bonus-stat-gains", JSON.stringify(bonusStatGains));
  }, [bonusStatGains]);

  useEffect(() => {
    localStorage.setItem("talent-scalings", JSON.stringify(talentScalings));
  }, [talentScalings]);

  // runs on new request
  useEffect(() => {
    console.log(result);
    console.log(requestStatus);

    if (!requestId || !requestStatus) {
      clearInterval(intervalRef.current);
      return;
    }
    waitForResult();
    // eslint-disable-next-line
  }, [requestId, result, requestStatus]);

  return (
    <div className="optimize-page">
      <Header />
      <StartingStats
        characterStats={characterStats}
        updateCharacterStats={updateCharacterStats}
        talentScalings={talentScalings}
        addTalentScaling={addTalentScaling}
        removeTalentScaling={removeTalentScaling}
        updateTalentScaling={updateTalentScaling}
        bonusStatGains={bonusStatGains}
        addBonusStatGains={addBonusStatGains}
        removeBonusStatGain={removeBonusStatGain}
        updateBonusStatGain={updateBonusStatGain}
        changeBonusStatGainName={changeBonusStatGainName}
        // buff gains
        buffCollections={buffCollections}
        addBuffCollection={addBuffCollection}
        removeBuffCollection={removeBuffCollection}
        changeBuffCollectionName={changeBuffCollectionName}
        addBuffToCollection={addBuffToCollection}
        removeBuffFromCollection={removeBuffFromCollection}
        updateBuffFromCollection={updateBuffFromCollection}
        // enemy
        enemyStats={enemyStats}
        updateEnemyStat={updateEnemyStat}
      />
      <button
        onClick={() => {
          createOptimizeRequest();
        }}>
        Optimize
      </button>
    </div>
  );
}
