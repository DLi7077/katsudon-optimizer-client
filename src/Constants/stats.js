export const ARTIFACT_SUBSTATS = [
  { label: "ATK%", value: "ATK %" },
  { label: "ATK", value: "Flat Attack" },
  { label: "HP%", value: "HP %" },
  { label: "HP", value: "Flat HP" },
  { label: "DEF%", value: "DEF %" },
  { label: "DEF", value: "Flat Defense" },
  { label: "Crit Rate%", value: "Crit Rate" },
  { label: "Energy Recharge%", value: "Energy Recharge%" },
  { label: "Elem. Mastery", value: "Elemental Mastery" },
  { label: "Crit Damage%", value: "Crit Damage" },
];

export const DAMAGE_BONUSES = [
  { label: "Anemo DMG Bonus%", value: "Anemo DMG Bonus%" },
  { label: "Cryo DMG Bonus%", value: "Cryo DMG Bonus%" },
  { label: "Dendro DMG Bonus%", value: "Dendro DMG Bonus%" },
  { label: "Electro DMG Bonus%", value: "Electro DMG Bonus%" },
  { label: "Geo DMG Bonus%", value: "Geo DMG Bonus%" },
  { label: "Hydro DMG Bonus%", value: "Hydro DMG Bonus%" },
  { label: "Pyro DMG Bonus%", value: "Pyro DMG Bonus%" },
  { label: "Physical DMG Bonus%", value: "Physical DMG Bonus%" },
];

export const FLOWER_MAIN_STATS = [{ label: "HP", value: "Flat HP" }];

export const FEATHER_MAIN_STATS = [{ label: "ATK", value: "Flat Attack" }];

export const SANDS_MAIN_STATS = [
  { label: "ATK%", value: "ATK %" },
  { label: "HP%", value: "HP %" },
  { label: "DEF%", value: "DEF %" },
  { label: "Energy Recharge%", value: "Energy Recharge%" },
  { label: "Elem. Mastery", value: "Elemental Mastery" },
];

export const GOBLET_MAIN_STATS = [
  ...DAMAGE_BONUSES,
  { label: "ATK%", value: "ATK %" },
  { label: "HP%", value: "HP %" },
  { label: "DEF%", value: "DEF %" },
  { label: "Elem. Mastery", value: "Elemental Mastery" },
];

export const CIRCLET_MAIN_STATS = [
  { label: "Elem. Mastery", value: "Elemental Mastery" },
  { label: "Crit Damage%", value: "Crit Damage" },
  { label: "ATK%", value: "ATK %" },
  { label: "HP%", value: "HP %" },
  { label: "DEF%", value: "DEF %" },
];

export const FINAL_STATS = [
  { value: "total_attack", label: "Total Attack" },
  { value: "total_hp", label: "Total HP" },
  { value: "total_defense", label: "Total DEF" },
  { value: "elemental_mastery", label: "Elem. Mastery" },
  { value: "energy_recharge", label: "Energy Recharge%" },
  { value: "crit_rate", label: "Crit Rate%" },
  { value: "crit_damage", label: "Crit Damage%" },
  // { value: "damage_bonus_anemo", label: "Anemo DMG Bonus%" },
  // { value: "damage_bonus_cryo", label: "Cryo DMG Bonus%" },
  // { value: "damage_bonus_dendro", label: "Dendro DMG Bonus%" },
  // { value: "damage_bonus_electro", label: "Electro DMG Bonus%" },
  // { value: "damage_bonus_geo", label: "Geo DMG Bonus%" },
  // { value: "damage_bonus_hydro", label: "Hydro DMG Bonus%" },
  // { value: "damage_bonus_pyro", label: "Pyro DMG Bonus%" },
  // { value: "damage_bonus_physical", label: "Physical DMG Bonus%" },
  // { value: "damage_bonus_all", label: "Other DMG Bonus%" },
];

export const BONUS_STATS = [
  ...ARTIFACT_SUBSTATS,
  ...DAMAGE_BONUSES,
  {
    value: "Other DMG Bonus%",
    label: "Other DMG Bonus%",
  },
];
