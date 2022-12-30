import React from "react";
import { ARTIFACT_PIECE } from "../Constants/artifact";

const classes = {
  artifactPiece: {
    width: "64px",
    height: "64px",
  },
};
export default function ArtifactIcon({ piece, style }) {
  return (
    <img
      src={ARTIFACT_PIECE[piece]}
      style={{ ...classes.artifactPiece, ...style }}
      alt={`${piece} artifact piece`}
    />
  );
}
