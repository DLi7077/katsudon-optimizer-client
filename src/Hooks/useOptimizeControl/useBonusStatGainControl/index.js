import { useState } from "react";
import { BONUS_GAIN_TEMPLATE } from "../../../Constants/character";
import createBonusStatGain from "./createBonusStatGain";

export default function useBonusStatGainControl() {
  const [bonusStatGains, setBonusStatGains] = useState(BONUS_GAIN_TEMPLATE);

  function addBonusStatGains() {
    const createdBonus = createBonusStatGain();

    setBonusStatGains([...bonusStatGains, createdBonus]);
  }
  function removeBonusStatGain(index) {
    if (index < 0 || index >= bonusStatGains.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    const updatedBonusGains = bonusStatGains.filter((_, idx) => idx !== index);

    setBonusStatGains(updatedBonusGains);
  }
  function updateBonusStatGain(index, field, value) {
    const updatedBonusGains = [...bonusStatGains];
    updatedBonusGains[index][field] = value;
    setBonusStatGains(updatedBonusGains);
  }

  function changeBonusStatGainName(index, name) {
    const updatedBonusGains = [...bonusStatGains];
    updatedBonusGains[index].name = name;
    setBonusStatGains(updatedBonusGains);
  }

  return {
    bonusStatGains,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
  };
}
