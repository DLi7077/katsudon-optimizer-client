import React, { useEffect, useRef, useState } from "react";
import useOptimizeControl from "../../Hooks/useOptimizeControl";
import Header from "./Header";
import "./styles.css";
import { createRequest, fetchRequest } from "../../Api/optimize";
import { get } from "lodash";
import {
  finalizedArtifactPreference,
  finalizedBonusStatGains,
  finalizedCharacterStats,
  finalizedEnemyStats,
  finalizedTalentScalings,
} from "../../Utils/Optimize";
import StartingStats from "./StartingStats";
import ArtifactPreference from "./ArtifactPreference";
import OptimizeButton from "../../Components/Buttons/OptimizeButton";
import OptimizeResult from "./OptimizeResult";
import { ELEMENT_BORDER } from "../../Constants/elements";
import OptimizerFilterSlider from "../../Components/OptimizerFilterSlider";

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

    // artifact preference
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  } = useOptimizeControl();

  const [createdRequest, setCreatedRequest] = useState(null);
  const [result, setResult] = useState(null);
  const [awaiting, setAwaiting] = useState(false);
  const [optimizeFilter, setOptimizeFilter] = useState(50);

  const intervalRef = useRef(null);
  const scrollRef = useRef(null);

  // creates the optimize request
  async function createOptimizeRequest() {
    const finalCharacterStats = finalizedCharacterStats(
      characterStats,
      buffCollections
    );
    const finalTalentScalings = finalizedTalentScalings(talentScalings);
    const finalBonusStatGains = finalizedBonusStatGains(bonusStatGains);
    const finalEnemyStats = finalizedEnemyStats(enemyStats);
    const finalArtifactPreferences =
      finalizedArtifactPreference(artifactPreference);

    const requestPayload = {
      character: {
        stats: finalCharacterStats,
        talent_scalings: finalTalentScalings,
        bonus_stat_gain: finalBonusStatGains,
      },
      enemy: finalEnemyStats,
      stat_preferences: finalArtifactPreferences,
      optimize_filter: optimizeFilter,
    };

    await createRequest(requestPayload)
      .then((createdRequest) => {
        setCreatedRequest(createdRequest);
        setResult(null);
      })
      .catch(() => {
        console.error("could not create a request");
      });
  }
  // checks request status every 2 seconds
  async function waitForResult() {
    setAwaiting(true);
    clearInterval(intervalRef.current);
    if (["complete", "error"].includes(get(createdRequest, "status"))) {
      setAwaiting(false);
      return;
    }

    intervalRef.current = setInterval(async () => {
      await fetchRequest(get(createdRequest, "_id")).then((request) => {
        setCreatedRequest({ ...createdRequest, ...request });
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
    console.log(get(createdRequest, "status"));

    if (!get(createdRequest, "_id") || !get(createdRequest, "status")) {
      clearInterval(intervalRef.current);
      return;
    }
    waitForResult();
    // eslint-disable-next-line
  }, [get(createdRequest, "status"), result]);

  function scrollToOptimize() {
    scrollRef.current.scrollIntoView();
  }

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
      <ArtifactPreference
        artifactPreference={artifactPreference}
        updateSubstatPreference={updateSubstatPreference}
        updateSandsPreference={updateSandsPreference}
        updateGobletPreference={updateGobletPreference}
        updateCircletPreference={updateCircletPreference}>
        <div className="align-down-center" style={{ width: "100%" }}>
          <span>Optimize Filter</span>
          <OptimizerFilterSlider
            style={{ width: "min(95%,600px)" }}
            value={optimizeFilter}
            onChange={(e) => {
              setOptimizeFilter(e.target.value);
            }}
          />
        </div>
        <OptimizeButton
          onClick={() => {
            createOptimizeRequest();
            scrollToOptimize();
          }}
        />
      </ArtifactPreference>
      <OptimizeResult
        scrollRef={scrollRef}
        optimizeResult={result}
        awaiting={awaiting}
        requestStatus={!!createdRequest && get(createdRequest, "status")}
        createTime={!!createdRequest && get(createdRequest, "created_at")}
        finishTime={!!result && get(result, "created_at")}
        damageColor={ELEMENT_BORDER[characterStats.element]}
      />
    </div>
  );
}
