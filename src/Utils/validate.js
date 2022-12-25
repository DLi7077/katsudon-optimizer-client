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
  "ATK %",
  "HP %",
  "DEF %",
  "Elemental Mastery",
  "Energy Recharge%",
  "Crit Rate",
  "Crit Damage",
  "Anemo DMG Bonus%",
  "Cryo DMG Bonus%",
  "Dendro DMG Bonus%",
  "Electro DMG Bonus%",
  "Geo DMG Bonus%",
  "Hydro DMG Bonus%",
  "Pyro DMG Bonus%",
  "Physical DMG Bonus%",
  "Other DMG Bonus%",
  "Base Attack",
  "Base HP",
  "Base Defense",
  "Flat Attack",
  "Flat HP",
  "Flat Defense",
];

export const isFinalStat = (stat) => FINAL_STATS.includes(stat);
export const isBonusStat = (stat) => BONUS_STATS.includes(stat);
export const isPercentageStat = (stat) => stat.slice(-1) === "%";
