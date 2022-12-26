import { map } from "lodash";
import React from "react";
import BuffCollection from "./BuffCollection";
import AddButton from "../../../Components/Buttons/AddButton";

const classes = {
  collections: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
};

export default function BuffCollections(props) {
  return (
    <div style={classes.collections}>
      {map(props.buffCollections, (collection, collectionIndex) => {
        return (
          <BuffCollection
            key={collectionIndex}
            changeName={props.changeBuffCollectionName}
            collectionIndex={collectionIndex}
            collection={collection}
            removeCollection={props.removeBuffCollection}
            addBuff={props.addBuffToCollection}
            removeBuff={props.removeBuffFromCollection}
            updateBuff={props.updateBuffFromCollection}
          />
        );
      })}
      <AddButton
        onClick={() => {
          props.addBuffCollection();
        }}
      />
    </div>
  );
}
