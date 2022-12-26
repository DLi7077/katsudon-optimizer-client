import React, { useEffect, useRef, useState } from "react";
import useOptimizeControl from "../../Hooks/useOptimizeControl";
import Character from "./Character";
import Header from "./Header";
import "./styles.css";
import { createRequest, fetchRequest } from "../../Api/optimize";
import { get } from "lodash";
import BuffCollections from "./BuffCollections";
import BonuStatGains from "./BonusStatGains";
import TalentScalings from "./TalentScalings";

export default function Optimizer() {
  const {
    characterStats,
    talentScalings,
    bonusStatGains,
    buffCollections,
    updateCharacterStats,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
    addBuffCollection,
    changeBuffCollectionName,
    removeBuffCollection,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  } = useOptimizeControl();

  const [requestId, setRequestId] = useState(null);
  const [result, setResult] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);

  const [characterBackgroundColor, setCharacterBackgroundColor] =
    useState(null);

  const intervalRef = useRef(null);

  // creates the optimize request
  async function createOptimizeRequest() {
    const requestPayload = {
      character: {
        stats: characterStats,
        talent_scalings: talentScalings,
        bonus_stat_gain: bonusStatGains,
      },
      enemy: {
        level: 90,
        affected_element: "Dendro",
        incoming_damage_element: "Electro",
        resistance_to_damage_element: -1.2,
        defense_percent_dropped: 0.3,
      },
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

  // runs on new request
  useEffect(() => {
    // console.log(result);
    // console.log(requestStatus);

    if (!requestId || !requestStatus) {
      clearInterval(intervalRef.current);
      return;
    }
    waitForResult();
  }, [requestId, result, requestStatus]);

  return (
    <div className="optimize-page">
      <Header />
      <div className="optimize-section character-part">
        <Character
          characterStats={characterStats}
          updateCharacterStats={updateCharacterStats}
          characterBackgroundColor={characterBackgroundColor}
          setCharacterBackgroundColor={(bgc) =>
            setCharacterBackgroundColor(bgc)
          }
        />
        <BuffCollections
          buffCollections={buffCollections}
          addBuffCollection={addBuffCollection}
          changeBuffCollectionName={changeBuffCollectionName}
          removeBuffCollection={removeBuffCollection}
          addBuffToCollection={addBuffToCollection}
          removeBuffFromCollection={removeBuffFromCollection}
          updateBuffFromCollection={updateBuffFromCollection}
        />
        <BonuStatGains
          bonusStatGains={bonusStatGains}
          addBonusStatGains={addBonusStatGains}
          removeBonusStatGain={removeBonusStatGain}
          updateBonusStatGain={updateBonusStatGain}
          changeBonusStatGainName={changeBonusStatGainName}
        />
        <TalentScalings
          talentScalings={talentScalings}
          addTalentScaling={addTalentScaling}
          removeTalentScaling={removeTalentScaling}
          updateTalentScaling={updateTalentScaling}
          characterBackgroundColor={characterBackgroundColor}
        />
      </div>
      <button
        onClick={() => {
          createOptimizeRequest();
        }}>
        Optimize
      </button>
    </div>
  );
}
