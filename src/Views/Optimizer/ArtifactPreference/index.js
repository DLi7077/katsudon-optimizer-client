import React from "react";
import SubstatPreference from "./SubstatPreference";
import "../styles.css";
import Title from "./Title";
import MainStatPreference from "./MainStatPreference";

export default function ArtifactPreference() {
  return (
    <div className="optimize-section artifact-part">
      <Title />
      <SubstatPreference />
      <MainStatPreference />
    </div>
  );
}
