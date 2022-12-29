const _ = require("lodash");

const ARTIFACT_SUBSTATS = [
  { label: "ATK%", value: "ATK %", selected: true },
  { label: "ATK", value: "Flat Attack", selected: true },
  { label: "HP%", value: "HP %" },
  { label: "HP", value: "Flat HP" },
  { label: "DEF%", value: "DEF %" },
  { label: "DEF", value: "Flat Defense" },
  { label: "Crit Rate%", value: "Crit Rate" },
  { label: "Energy Recharge%", value: "Energy Recharge%", selected: true },
  { label: "Elem. Mastery", value: "Elemental Mastery", selected: true },
  { label: "Crit Damage%", value: "Crit Damage", selected: true },
];

const x = _.chain(ARTIFACT_SUBSTATS)
  .filter((stat) => !!stat.selected)
  .map((stat) => stat.value)
  .value();

console.log(x);
