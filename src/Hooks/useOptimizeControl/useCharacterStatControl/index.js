import { useState } from "react";
import { CHARACTER_STAT_TEMPLATE } from "../../../Constants/character";

export default function useCharacterStatControl() {
  const [characterStats, setCharacterStats] = useState(CHARACTER_STAT_TEMPLATE);

  function updateCharacterStats(key, value) {
    const updatedStats = { ...characterStats, [key]: value };
    setCharacterStats(updatedStats);
  }

  return {
    characterStats,
    updateCharacterStats,
  };
}
