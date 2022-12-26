const FINAL_STATS = [
  "total_attack",
  "total_hp",
  "total_defense",
  "elemental_mastery",
  "energy_recharge",
  "crit_rate",
  "crit_damage",
  "damage_bonus_anemo",
  "damage_bonus_cryo",
  "damage_bonus_dendro",
  "damage_bonus_electro",
  "damage_bonus_geo",
  "damage_bonus_hydro",
  "damage_bonus_pyro",
  "damage_bonus_physical",
  "damage_bonus_all",
  "melt_bonus",
];

const BONUS_STATS = [
  "attack_percent",
  "flat_attack",
  "hp_percent",
  "base_def",
  "def_percent",
  "flat_def",
  "elemental_mastery",
  "energy_recharge",
  "crit_rate",
  "crit_damage",
  "damage_bonus_elemental",
  "damage_bonus_talent",
  "damage_bonus_all",
  "melt_bonus",
  "base_damage_bonus",
  "defense_shred",
  "quicken_bonus",
];

export const isFinalStat = (stat) => FINAL_STATS.includes(stat);
export const isBonusStat = (stat) => BONUS_STATS.includes(stat);
export const isPercentageStat = (stat) => !!stat && stat.slice(-1) === "%";
