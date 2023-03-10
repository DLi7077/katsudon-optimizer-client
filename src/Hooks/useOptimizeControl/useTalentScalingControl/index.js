import { useState } from "react";
import createTalentScaling from "./createTalentScaling";
import { TALENT_SCALING_TEMPLATE } from "../../../Constants/character";

export default function useTalentScalingControl() {
  const savedTalents = !!localStorage.getItem("talent-scalings")
    ? JSON.parse(localStorage.getItem("talent-scalings"))
    : [];
  const [talentScalings, setTalentScalings] = useState(
    savedTalents.length ? savedTalents : TALENT_SCALING_TEMPLATE
  );

  function addTalentScaling() {
    const createdScaling = createTalentScaling();
    setTalentScalings([...talentScalings, createdScaling]);
  }
  function removeTalentScaling(index) {
    if (index < 0 || index >= talentScalings.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    if (talentScalings.length === 1) {
      console.error("must have a least one talent scaling");
      return;
    }
    const updatedScalings = talentScalings.filter((_, idx) => idx !== index);

    setTalentScalings(updatedScalings);
  }
  function updateTalentScaling(index, stat, percent, offset) {
    if (index < 0 || index >= talentScalings.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    const updatedScalings = [...talentScalings];
    updatedScalings[index] = {
      talent_stat: stat,
      talent_percent: percent,
      talent_stat_offset: offset
    };

    setTalentScalings(updatedScalings);
  }

  return {
    talentScalings,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
  };
}
