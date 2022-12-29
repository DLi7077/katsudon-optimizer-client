import { useState } from "react";
import { CHARACTER_STAT_TEMPLATE } from "../../../Constants/character";

export default function useCharacterStatControl() {
  const savedCharacter = {
    ...CHARACTER_STAT_TEMPLATE,
    ...(!!localStorage.getItem("character-stats")
      ? JSON.parse(localStorage.getItem("character-stats"))
      : {}),
  };
  const [characterStats, setCharacterStats] = useState(savedCharacter);

  function updateCharacterStats(key, value) {
    const updatedStats = { ...characterStats, [key]: value };
    setCharacterStats(updatedStats);
  }

  return {
    characterStats,
    updateCharacterStats,
  };
}
