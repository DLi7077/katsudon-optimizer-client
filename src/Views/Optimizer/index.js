import React from "react";
import useOptimizeControl from "../../Hooks/useOptimizeControl";
import CharacterSection from "./CharacterSection";
import Header from "./Header";
import "./styles.css";

export default function Optimizer() {
  const {
    characterStats,
    talentScaling,
    bonusStatGains,
    buffCollections,
    updateCharacterStats,
    addTalentScaling,
    removeTalentScaling,
    addBonusStatGains,
    removeBonusStatGain,
    addBuffCollection,
    removeBuffCollection,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  } = useOptimizeControl();

  return (
    <div className="optimize-page">
      <Header />
      <div className="optimize-section character-part">
        <CharacterSection />
      </div>
    </div>
  );
}
