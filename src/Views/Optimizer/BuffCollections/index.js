import { map } from "lodash";
import React from "react";
import BuffCollection from "./BuffCollection";

export default function BuffCollections(props) {
  return (
    <div>
      {map(props.buffCollections, (collection, collectionIndex) => {
        function addBuffToCollection(stat, amount) {
          props.addBuffToCollection(collectionIndex, stat, amount);
        }
        function removeBuffFromCollection(buffIndex) {
          props.removeBuffFromCollection(collectionIndex, buffIndex);
        }
        function updateBuff(buffIndex, stat, amount) {
          props.updateBuffFromCollection(
            collectionIndex,
            buffIndex,
            stat,
            amount
          );
        }

        return (
          <BuffCollection
            key={collectionIndex}
            collection={collection}
            addBuff={addBuffToCollection}
            removeBuff={removeBuffFromCollection}
            updateBuff={updateBuff}
          />
        );
      })}
    </div>
  );
}
