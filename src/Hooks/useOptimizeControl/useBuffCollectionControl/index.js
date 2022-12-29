import { createBuffCollection, createBuff } from "./createBuffCollection";
import { useState } from "react";

export default function useBuffCollectionControl() {
  const savedBuffedCollection = !!localStorage.getItem("buff-collections")
    ? JSON.parse(localStorage.getItem("buff-collections"))
    : [];
  const [buffCollections, setBuffCollections] = useState(savedBuffedCollection);

  function changeBuffCollectionName(index, name) {
    const updatedBuffCollections = [...buffCollections];
    updatedBuffCollections[index].name = name;
    setBuffCollections(updatedBuffCollections);
  }

  function addBuffCollection() {
    const createdCollection = createBuffCollection("");
    setBuffCollections([...buffCollections, createdCollection]);
  }
  function removeBuffCollection(index) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds");
      return;
    }
    const updatedCollection = buffCollections.filter((_, idx) => idx !== index);

    setBuffCollections(updatedCollection);
  }
  function addBuffToCollection(index) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds");
      return;
    }

    const updatedCollection = [...buffCollections];
    updatedCollection[index].buffs.push(createBuff());
    setBuffCollections(updatedCollection);
  }
  function removeBuffFromCollection(index, buffIndex) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds in collection");
      return;
    }
    if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
      console.error("buffIndex", buffIndex, "out of bounds in buff");
      return;
    }

    const updatedBuffCollections = [...buffCollections];
    const updatedBuffList = updatedBuffCollections[index].buffs.filter(
      (_, idx) => idx !== buffIndex
    );

    updatedBuffCollections[index] = {
      ...buffCollections[index],
      buffs: updatedBuffList,
    };

    setBuffCollections(updatedBuffCollections);
  }
  function updateBuffFromCollection(index, buffIndex, stat, amount) {
    if (index < 0 || index >= buffCollections.length) {
      console.error("index", index, "out of bounds in collection");
      return;
    }
    if (buffIndex < 0 || buffIndex >= buffCollections[index].buffs.length) {
      console.error("buffIndex", buffIndex, "out of bounds in buff");
      return;
    }

    const updatedBuffCollection = [...buffCollections];
    updatedBuffCollection[index].buffs[buffIndex] = {
      bonus_stat: stat,
      bonus_amount: amount,
    };

    setBuffCollections(updatedBuffCollection);
  }

  return {
    buffCollections,
    changeBuffCollectionName,
    addBuffCollection,
    addBuffToCollection,
    removeBuffCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  };
}
