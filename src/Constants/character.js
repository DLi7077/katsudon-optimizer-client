export const CHARACTER_STAT_TEMPLATE = {
  level: 90,
  element: "Pyro",
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
};

export const TALENT_SCALING_TEMPLATE = [
  { talent_stat: "total_attack", talent_percent: 1141, talent_stat_offset: 0 },
];

export const BONUS_GAIN_TEMPLATE = [
  {
    name: "Engulfing Lightning",
    source_stat: "energy_recharge", // final stat
    target_stat: "ATK %", // bonus stat
    source_offset: 100, // divide by 100 if target stat is percentage on parse
    percent_gain: 46, // divide by 100 on parse
    max_gain: 1.2, // divide by 100 is target stat is percentage on parse
  },
];

export const BUFF_COLLECTIONS = [
  {
    name: "sara",
    buffs: [
      {
        bonus_stat: "flat_attack",
        bonus_amount: 372,
      },
      {
        bonus_stat: "attack_percent",
        bonus_amount: 0.4,
      },
    ],
  },
  {
    name: "kazuha",
    buffs: [
      {
        bonus_stat: "elemental_mastery",
        bonus_amount: 200,
      },
      {
        bonus_stat: "attack_percent",
        bonus_amount: 0.4,
      },
    ],
  },
];
