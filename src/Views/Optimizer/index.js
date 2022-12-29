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
import Enemy from "./Enemy";
import { ELEMENT_BACKGROUND } from "../../Constants/elements";
import {
  finalizedBonusStatGains,
  finalizedCharacterStats,
  finalizedTalentScalings,
} from "../../Utils/Optimize";

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

  const [characterBackgroundColor, setCharacterBackgroundColor] = useState(
    ELEMENT_BACKGROUND[characterStats.element]
  );
  const [enemyBackgroundColor, setEnemyBackgroundColor] = useState(
    ELEMENT_BACKGROUND[enemyStats.element]
  );

  const intervalRef = useRef(null);

  // creates the optimize request
  async function createOptimizeRequest() {
    const finalizedCharacter = finalizedCharacterStats(
      characterStats,
      buffCollections
    );
    console.table(finalizedCharacter);

    const finalizedBonusGains = finalizedBonusStatGains(bonusStatGains);
    console.table(finalizedBonusGains);

    const finalizedScalings = finalizedTalentScalings(talentScalings);
    console.table(finalizedScalings);

    // const requestPayload = {
    //   character: {
    //     stats: characterStats,
    //     talent_scalings: talentScalings,
    //     bonus_stat_gain: bonusStatGains,
    //   },
    //   enemy: {
    //     level: 90,
    //     affected_element: "Dendro",
    //     incoming_damage_element: "Electro",
    //     resistance_to_damage_element: -1.2,
    //     defense_percent_dropped: 0.3,
    //   },
    //   stat_preferences: {
    //     substats: [
    //       "Flat Attack",
    //       "ATK %",
    //       "Elemental Mastery",
    //       "Energy Recharge%",
    //       "Crit Damage",
    //     ],
    //     flower_main_stats: ["Flat HP"],
    //     feather_main_stats: ["Flat Attack"],
    //     sands_main_stats: ["ATK %", "Energy Recharge%"],
    //     goblet_main_stats: ["Electro DMG Bonus%", "ATK %"],
    //     circlet_main_stats: ["ATK %", "Crit Damage"],
    //   },
    // };

    // await createRequest(requestPayload)
    //   .then((createdRequest) => {
    //     setRequestId(get(createdRequest, "_id"));
    //     setResult(null);
    //     setRequestStatus(get(createdRequest, "status"));
    //     console.log(createdRequest);
    //   })
    //   .catch(() => {
    //     console.error("could not create a request");
    //   });
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

  // useEffect(() => {
  //   console.table(enemyStats);
  // }, [enemyStats]);

  // useEffect(() => {
  //   console.table(characterStats);
  // }, [characterStats]);

  // useEffect(() => {
  //   bonusStatGains.forEach((b) => {
  //     console.table(b);
  //   });
  // }, [bonusStatGains]);
  // useEffect(() => {
  //   console.table(talentScalings);
  // }, [talentScalings]);

  // useEffect(() => {
  //   buffCollections.forEach((b) => {
  //     console.table(b.buffs);
  //   });
  // }, [buffCollections]);

  // runs on new request
  useEffect(() => {
    // console.log(result);
    // console.log(requestStatus);

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
      <div className="optimize-section character-part">
        <div
          className="align-down-center"
          style={{ alignItems: "flex-start", gap: "2rem" }}>
          <Character
            characterStats={characterStats}
            updateCharacterStats={updateCharacterStats}
            characterBackgroundColor={characterBackgroundColor}
            setCharacterBackgroundColor={(element) =>
              setCharacterBackgroundColor(ELEMENT_BACKGROUND[element])
            }
            updateEnemyAffectedElement={(element) => {
              updateEnemyStat("incoming_damage_element", element);
            }}
          />
          <TalentScalings
            talentScalings={talentScalings}
            addTalentScaling={addTalentScaling}
            removeTalentScaling={removeTalentScaling}
            updateTalentScaling={updateTalentScaling}
            characterBackgroundColor={characterBackgroundColor}
          />
          <Enemy
            enemyStats={enemyStats}
            updateEnemyStat={updateEnemyStat}
            enemyBackgroundColor={enemyBackgroundColor}
            setEnemyBackgroundColor={(element) =>
              setEnemyBackgroundColor(ELEMENT_BACKGROUND[element])
            }
            incomingDamageElement={characterStats.element}
          />
        </div>
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
