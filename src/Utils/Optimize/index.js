import { STAT_LABEL } from "../../Constants/labels";
import { reduce } from "lodash";
import { isPercentageStat } from "../validate";

const percentToDecimal = (x) => x * 0.01;

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

const PERCENT_TO_DECIMAL = 0.01;
export function finalizedCharacterStats(characterStats, buffCollections) {
  const buffedCharacter = addBuffsToCharacter(characterStats, buffCollections);
  // convert percentage stats to decimal
  const finalizedCharacterStats = reduce(
    buffedCharacter,
    (finalizedCharacter, amount, stat) => {
      const statIsPercent = isPercentageStat(STAT_LABEL[stat]);
      finalizedCharacter[stat] = statIsPercent
        ? amount * PERCENT_TO_DECIMAL
        : amount;
      return finalizedCharacter;
    },
    {}
  );

  return finalizedCharacterStats;
}

export function finalizedBonusStatGains(bonusStatGains) {
  const finalizedBonusGains = bonusStatGains.map((bonusGain) => {
    const { source_stat, target_stat, source_offset, percent_gain, max_gain } =
      bonusGain;

    const sourceIsPercent = isPercentageStat(STAT_LABEL[source_stat]);
    const targetIsPercent = isPercentageStat(target_stat);

    return {
      ...bonusGain,
      source_offset: sourceIsPercent
        ? percentToDecimal(source_offset)
        : source_offset,
      percent_gain: percentToDecimal(percent_gain),
      max_gain: targetIsPercent ? percentToDecimal(max_gain) : max_gain,
    };
  });

  return finalizedBonusGains;
}

export function finalizedTalentScalings(talentScalings) {
  const finializedScalings = talentScalings.map((talentScaling) => {
    const { talent_stat, talent_percent } = talentScaling;
    return {
      talent_stat: talent_stat,
      talent_percent: percentToDecimal(talent_percent),
    };
  });

  return finializedScalings;
}

export function finalizedEnemyStats(enemyStats) {
  const finalEnemyStats = reduce(
    enemyStats,
    (finalizedEnemy, amount, stat) => {
      const statIsPercent = isPercentageStat(STAT_LABEL[stat]);
      finalizedEnemy[stat] = statIsPercent
        ? amount * PERCENT_TO_DECIMAL
        : amount;
      return finalizedEnemy;
    },
    {}
  );

  return finalEnemyStats;
}

function selectedStatValues(stats) {
  return stats.filter((stat) => stat.selected).map((stat) => stat.value);
}

export function finalizedArtifactPreference(artifactPreference) {
  const {
    substats,
    flower_main_stats,
    feather_main_stats,
    sands_main_stats,
    goblet_main_stats,
    circlet_main_stats,
  } = artifactPreference;

  const finalSubstats = selectedStatValues(substats);
  const finalFlowerMainStats = selectedStatValues(flower_main_stats);
  const finalFeatherMainStats = selectedStatValues(feather_main_stats);
  const finalSandsMainStats = selectedStatValues(sands_main_stats);
  const finalGobletMainStats = selectedStatValues(goblet_main_stats);
  const finalCircletMainStats = selectedStatValues(circlet_main_stats);

  return {
    substats: finalSubstats,
    flower_main_stats: finalFlowerMainStats,
    feather_main_stats: finalFeatherMainStats,
    sands_main_stats: finalSandsMainStats,
    goblet_main_stats: finalGobletMainStats,
    circlet_main_stats: finalCircletMainStats,
  };
}
