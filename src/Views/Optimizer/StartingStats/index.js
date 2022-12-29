import React, { useState } from "react";
import Character from "./Character";
import TalentScalings from "./TalentScalings";
import Enemy from "./Enemy";
import BonusStatGains from "./BonusStatGains";
import BuffCollections from "./BuffCollections";
import "../styles.css";
import { get } from "lodash";
import { ELEMENT_BACKGROUND } from "../../../Constants/elements";

export default function StartingStats({
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
}) {
  const [characterBackgroundColor, setCharacterBackgroundColor] = useState(
    ELEMENT_BACKGROUND[characterStats.element]
  );
  const [enemyBackgroundColor, setEnemyBackgroundColor] = useState(
    ELEMENT_BACKGROUND[enemyStats.element]
  );
  return (
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
      <BonusStatGains
        bonusStatGains={bonusStatGains}
        addBonusStatGains={addBonusStatGains}
        removeBonusStatGain={removeBonusStatGain}
        updateBonusStatGain={updateBonusStatGain}
        changeBonusStatGainName={changeBonusStatGainName}
      />
    </div>
  );
}
