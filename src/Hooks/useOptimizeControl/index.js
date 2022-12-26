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
  const [talentScaling, setTalentScaling] = useState(TALENT_SCALING_TEMPLATE);
  const [bonusStatGains, setBonusStatGains] = useState(BONUS_GAIN_TEMPLATE);
  const [buffCollections, setBuffCollections] = useState(BUFF_COLLECTIONS);

  function updateCharacterStats(key, value) {
    const updatedStats = { ...characterStats, [key]: value };
    setCharacterStats(updatedStats);
  }

  function addTalentScaling(stat, percent) {
    const createdScaling = createTalentScaling(stat, percent);
    setTalentScaling([...talentScaling, createdScaling]);
  }
  function removeTalentScaling(index) {
    if (index < 0 || index >= talentScaling.length) {
      console.err("index", index, "out of bounds");
      return;
    }
    const updatedScalings = talentScaling.filter((_, idx) => idx !== index);

    setTalentScaling(updatedScalings);
  }

  function addBonusStatGains(source, target, offset, percentGain, maxGain) {
    const createdBonus = createBonusStatGain(
      source,
      target,
      offset,
      percentGain,
      maxGain
    );

    setBonusStatGains([...bonusStatGains, createdBonus]);
  }

  function removeBonusStatGain(index) {
    if (index < 0 || index >= bonusStatGains.length) {
      console.err("index", index, "out of bounds");
      return;
    }
    const updatedBonusGains = bonusStatGains.filter((_, idx) => idx !== index);

    setBonusStatGains(updatedBonusGains);
  }

  function changeBuffCollectionName(index, name) {
    const updatedBuffCollections = [...buffCollections];
    updatedBuffCollections[index].name = name;
    setBuffCollections(updatedBuffCollections);
  }

  function addBuffCollection(name) {
    const createdCollection = createBuffCollection(name);
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

  function addBuffToCollection(index, stat, amount) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds");
      return;
    }

    const updatedCollection = [...buffCollections];
    updatedCollection[index].buffs.push(createBuff(stat, amount));
  }

  function removeBuffFromCollection(index, buffIndex) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds in collection");
      return;
    }
    if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
      console.err("buffIndex", buffIndex, "out of bounds in buff");
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
    updatedBuffCollection[index].buffs[buffIndex] = createBuff(stat, amount);

    setBuffCollections(updatedBuffCollection);
  }

  return {
    characterStats,
    talentScaling,
    bonusStatGains,
    buffCollections,
    updateCharacterStats,
    addTalentScaling,
    removeTalentScaling,
    addBonusStatGains,
    removeBonusStatGain,
    changeBuffCollectionName,
    addBuffCollection,
    removeBuffCollection,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  };
}
