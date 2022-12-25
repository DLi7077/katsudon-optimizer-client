const INITIAL_STATS_LEFT = [
  { label: "Lv.", value: "Level" },
  { label: "" },
  { label: "Base Attack", value: "Base Attack" },
  { label: "ATK%", value: "ATK %" },
  { label: "ATK", value: "Flat Attack" },
  { label: "" },
  { label: "Base HP", value: "Base HP" },
  { label: "HP%", value: "HP %" },
  { label: "HP", value: "Flat HP" },
  { label: "" },
  { label: "Base DEF", value: "Base DEF" },
  { label: "DEF%", value: "DEF %" },
  { label: "DEF", value: "Flat Defense" },
];

const INITIAL_STATS_RIGHT = [
  { label: "Energy Recharge%", value: "Energy Recharge%" },
  { label: "Elem. Mastery", value: "Elemental Mastery" },
  { label: "" },
  { label: "Crit Rate%", value: "Crit Rate" },
  { label: "Crit Damage%", value: "Crit Damage" },
  { label: "" },
  // { label: "Anemo DMG Bonus%", value: "Anemo DMG Bonus%" },
  // { label: "Cryo DMG Bonus%", value: "Cryo DMG Bonus%" },
  // { label: "Dendro DMG Bonus%", value: "Dendro DMG Bonus%", },
  // { label: "Electro DMG Bonus%", value: "Electro DMG Bonus%" },
  // { label: "Geo DMG Bonus%", value: "Geo DMG Bonus%" },
  // { label: "Hydro DMG Bonus%", value: "Hydro DMG Bonus%" },
  // { label: "Pyro DMG Bonus%", value: "Pyro DMG Bonus%" },
  // { label: "Physical DMG Bonus%", value: "Physical DMG Bonus%" },
  { label: "Elem. DMG Bonus%", value: "Elemental DMG Bonus%" },
  { label: "Other DMG Bonus%", value: "Other DMG Bonus%" },
  { label: "Talent DMG Bonus%", value: "Talent DMG Bonus%" },
  { label: "" },
  { label: "Quicken Bonus%", value: "Quicken Bonus%" },
  { label: "Melt Bonus%", value: "Melt Bonus%" },
  { label: "Defense Ignore%", value: "Defense Ignore%" },
];

export const INITIAL_CHARACTER_STATS = {
  leftStats: INITIAL_STATS_LEFT,
  rightStats: INITIAL_STATS_RIGHT,
};

export const CHARACTER_STAT_TEMPLATE = {
  level: 90,
  base_attack: 0,
  attack_percent: 0,
  flat_attack: 0,
  base_hp: 0,
  hp_percent: 0.4,
  flat_hp: 0,
  flat_def: 0,
  def_percent: 0,
  elemental_mastery: 0,
  energy_recharge: 0,
  crit_rate: 0,
  crit_damage: 0,
  damage_bonus_elemental: 0,
  damage_bonus_all: 0,
  melt_bonus: 0,
  base_damage_bonus: 0,
  defense_shred: 0,
  quicken_bonus: 0,
};

export const TALENT_SCALING_TEMPLATE = [
  { talent_stat: "total_attack", talent_percent: 11.3 },
];

export const BONUS_GAIN_TEMPLATE = [
  {
    source_stat: "total_attack",
    target_stat: "Energy Recharge%",
    source_offset: 1.0, // divide by 100 if target stat is percentage on parse
    percent_gain: 0.46, // divide by 100 on parse
    max_gain: 1.2, // divide by 100 is target stat is percentage on parse
  },
];

export const BUFFS = [
  {
    bonus_stat: "Flat Attack",
    bonus_amount: 372,
  },
];
