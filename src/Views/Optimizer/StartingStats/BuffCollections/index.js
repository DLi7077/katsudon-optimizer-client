import { map } from "lodash";
import React from "react";
import BuffCollection from "./BuffCollection";
import AddButton from "../../../../Components/Buttons/AddButton";
import "./styles.css";

export default function BuffCollections(props) {
  return (
    <div className="align-down-center" style={{ gap: "1rem" }}>
      <div
        className="align-horizontal-center"
        style={{ gap: "1rem", flexWrap: "wrap" }}>
        <div className="section-title">
          <span style={{ marginRight: "1rem" }}>Stat Buffs</span>
          <AddButton
            style={{ fontSize: "1.25rem" }}
            onClick={() => {
              props.addBuffCollection();
            }}
          />
        </div>
      </div>

      <div className="collections">
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
      </div>
    </div>
  );
}
