import { useState } from "react";
import {
  BONUS_GAIN_TEMPLATE,
  TALENT_SCALING_TEMPLATE,
  CHARACTER_STAT_TEMPLATE,
  BUFF_COLLECTIONS,
} from "../../Constants/character";
import createTalentScaling from "./createTalentScaling";
import createBonusStatGain from "./createBonusStatGain";
import { createBuff, createBuffCollection } from "./createBuffCollection";

export default function useOptimizeControl() {
  const [characterStats, setCharacterStats] = useState(CHARACTER_STAT_TEMPLATE);
  const [talentScalings, setTalentScalings] = useState(TALENT_SCALING_TEMPLATE);
  const [bonusStatGains, setBonusStatGains] = useState(BONUS_GAIN_TEMPLATE);
  const [buffCollections, setBuffCollections] = useState(BUFF_COLLECTIONS);

  function updateCharacterStats(key, value) {
    const updatedStats = { ...characterStats, [key]: value };
    setCharacterStats(updatedStats);
  }

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
  function updateTalentScaling(index, stat, percent) {
    if (index < 0 || index >= talentScalings.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    const updatedScalings = [...talentScalings];
    updatedScalings[index] = {
      talent_stat: stat,
      talent_percent: percent,
    };

    setTalentScalings(updatedScalings);
  }

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
  function changeBuffCollectionName(index, name) {
    const updatedBuffCollections = [...buffCollections];
    updatedBuffCollections[index].name = name;
    setBuffCollections(updatedBuffCollections);
  }

  function addBuffCollection() {
    const createdCollection = createBuffCollection("");
    setBuffCollections([...buffCollections, createdCollection]);
  }
  function removeBuffCollection(index) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    const updatedCollection = buffCollections.filter((_, idx) => idx !== index);

    setBuffCollections(updatedCollection);
  }
  function addBuffToCollection(index) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds");
      return;
    }

    const updatedCollection = [...buffCollections];
    updatedCollection[index].buffs.push(createBuff());
    setBuffCollections(updatedCollection);
  }
  function removeBuffFromCollection(index, buffIndex) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds in collection");
      return;
    }
    if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
      console.error("buffIndex", buffIndex, "out of bounds in buff");
      return;
    }

    const updatedBuffCollections = [...buffCollections];
    const updatedBuffList = updatedBuffCollections[index].buffs.filter(
      (_, idx) => idx !== buffIndex
    );

    updatedBuffCollections[index] = {
      ...buffCollections[index],
      buffs: updatedBuffList,
    };

    setBuffCollections(updatedBuffCollections);
  }
  function updateBuffFromCollection(index, buffIndex, stat, amount) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds in collection");
      return;
    }
    if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
      console.error("buffIndex", buffIndex, "out of bounds in buff");
      return;
    }

    const updatedBuffCollection = [...buffCollections];
    updatedBuffCollection[index].buffs[buffIndex] = {
      bonus_stat: stat,
      bonus_amount: amount,
    };

    setBuffCollections(updatedBuffCollection);
  }

  return {
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
    changeBuffCollectionName,
    addBuffCollection,
    removeBuffCollection,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  };
}
