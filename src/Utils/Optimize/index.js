import { STAT_LABEL } from "../../Constants/labels";
import BuffCollection from "../../Views/Optimizer/BuffCollections/BuffCollection";
import { reduce } from "lodash";
import { isPercentageStat } from "../validate";

/*
  characterStats : {
    level: 90,
    element: "Electro",
    base_attack: 0,
    attack_percent: 0,
    flat_attack: 0,
    base_hp: 0,
    hp_percent: 0,

    flat_hp: 0,
    base_def: 0,
    def_percent: 0,
    flat_def: 0,
    elemental_mastery: 0,
    energy_recharge: 0,
    crit_rate: 0,
    crit_damage: 0,
    damage_bonus_elemental: 0,
    damage_bonus_talent: 0,
    damage_bonus_all: 0,
    melt_bonus: 0,
    base_damage_bonus: 0,
    defense_shred: 0,
    quicken_bonus: 0,
  }
*/
export function addBuffsToCharacter(characterStats, buffCollections) {
  const buffedCharacter = buffCollections.reduce(
    (character, buffCollection) => {
      buffCollection.buffs.forEach((buff) => {
        const { bonus_stat, bonus_amount } = buff;
        character[bonus_stat] = character[bonus_stat]
          ? character[bonus_stat] + bonus_amount
          : bonus_amount;
      });
      return character;
    },
    { ...characterStats }
  );

  return buffedCharacter;
}

// to operate on character

export function percentageStatsToDecimal() {}

export function finalizedCharacterStats(characterStats, buffCollections) {
  const buffedCharacter = addBuffsToCharacter(characterStats, buffCollections);
  // convert percentage stats to decimal
  const finalizedCharacterStats = reduce(
    buffedCharacter,
    (finalizedCharacter, amount, stat) => {
      const statIsPercent = isPercentageStat(STAT_LABEL[stat]);
      const PERCENT_TO_DECIMAL = 0.01;
      finalizedCharacter[stat] = statIsPercent
        ? amount * PERCENT_TO_DECIMAL
        : amount;
      return finalizedCharacter;
    },
    {}
  );

  return finalizedCharacterStats;
}
