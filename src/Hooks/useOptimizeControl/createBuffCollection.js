import { isBonusStat } from "../../Utils/validate";

export function createBuffCollection(name) {
  const buffCollection = {
    name: name,
    buffs: [],
  };

  return buffCollection;
}

export function createBuff(buff, value) {
  if (!isBonusStat(buff)) {
    console.error(buff, "is not a bonus stat");
  }

  return {
    bonus_stat: buff,
    bonus_amount: value,
  };
}
