export function createBuffCollection(name) {
  const buffCollection = {
    name: name,
    buffs: [],
  };

  return buffCollection;
}

export function createBuff() {

  return {
    bonus_stat: '',
    bonus_amount: 0,
  };
}
