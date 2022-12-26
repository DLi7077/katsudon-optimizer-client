import { map } from "lodash";
import React from "react";
import BuffCollection from "./BuffCollection";

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
            collectionIndex={collectionIndex}
            collection={collection}
            addBuff={props.addBuffToCollection}
            removeBuff={props.removeBuffFromCollection}
            updateBuff={props.updateBuffFromCollection}
          />
        );
      })}
    </div>
  );
}