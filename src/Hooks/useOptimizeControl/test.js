function createBuffCollection(name) {
  const buffCollection = {
    name: name,
    buffs: [],
  };

  return buffCollection;
}

function createBuff(buff, value) {
  return {
    bonus_stat: buff,
    bonus_amount: value,
  };
}

function addBuffCollection(name) {
  const createdCollection = createBuffCollection(name);
  return [...buffCollections, createdCollection];
}

function removeBuffCollection(index) {
  if (index < 0 || index >= buffCollections.length) {
    console.err("index", index, "out of bounds");
    return buffCollections;
  }
  const updatedCollection = buffCollections.filter((_, idx) => idx != index);
  return updatedCollection;
}

function addBuffToCollection(index, stat, amount) {
  if (index < 0 || index >= buffCollections.length) {
    console.err("index", index, "out of bounds");
    return buffCollections;
  }

  const updatedCollection = [...buffCollections];
  updatedCollection[index].buffs.push(createBuff(stat, amount));
  return updatedCollection;
}

function removeBuffFromCollection(index, buffIndex) {
  if (index < 0 || index >= buffCollections.length) {
    console.err("index", index, "out of bounds in collection");
    return buffCollections;
  }
  if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
    console.err("buffIndex", buffIndex, "out of bounds in buff");
    return buffCollections;
  }

  const updatedBuffCollections = [...buffCollections];
  const updatedBuffList = updatedBuffCollections[index].buffs.filter(
    (_, idx) => idx != buffIndex
  );

  // update that index
  updatedBuffCollections[index] = {
    ...buffCollections[index],
    buffs: updatedBuffList,
  };

  return updatedBuffCollections;
}

function updateBuffFromCollection(index, buffIndex, stat, amount) {
  if (index < 0 || index >= buffCollections.length) {
    console.err("index", index, "out of bounds in collection");
    return;
  }
  if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
    console.err("buffIndex", buffIndex, "out of bounds in buff");
    return;
  }

  const updatedBuffCollection = [...buffCollections];
  updatedBuffCollection[index].buffs[buffIndex] = createBuff(stat, amount);
  return updatedBuffCollection;
}

let buffCollections = [];

buffCollections = addBuffCollection("buff 1");
buffCollections = addBuffCollection("buff 2");
buffCollections = addBuffCollection("buff 2");
buffCollections = addBuffToCollection(0, "atk", 10);
buffCollections = addBuffToCollection(0, "atk", 1);
buffCollections = addBuffToCollection(1, "atk", 1);
console.log(buffCollections[0].buffs);
buffCollections = updateBuffFromCollection(0, 1, "asd", 1231);
console.log(buffCollections[0].buffs);
buffCollections = addBuffToCollection(0, "def", 1);
console.log(buffCollections[0].buffs);
buffCollections = removeBuffFromCollection(0, 0, "asd", 1231);
console.log(buffCollections[0].buffs);
buffCollections = addBuffToCollection(0, "crit", 1);
console.log(buffCollections[0].buffs);

buffCollections = removeBuffCollection(0);

console.log(buffCollections[0].buffs);
