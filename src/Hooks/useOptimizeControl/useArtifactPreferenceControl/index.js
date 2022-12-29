import { useState } from "react";
import _ from "lodash";
import { ARTIFACT_SUBSTATS } from "../../../Constants/stats";

const DEFAULT_PREFERENCES = {
  substats: [
    "Flat Attack",
    "ATK %",
    "Elemental Mastery",
    "Energy Recharge%",
    "Crit Damage",
  ],
  flower_main_stats: ["Flat HP"],
  feather_main_stats: ["Flat Attack"],
  sands_main_stats: ["ATK %", "Energy Recharge%"],
  goblet_main_stats: ["Electro DMG Bonus%", "ATK %"],
  circlet_main_stats: ["ATK %", "Crit Damage"],
};

export default function useArtifactPreferenceControl() {
  const [artifactPreference, setArtifactPreference] = useState({
    substats: ARTIFACT_SUBSTATS.map((stat) => ({ ...stat, selected: false })), // >=5
    flower_main_stats: ["Flat HP"], // immutable
    feather_main_stats: ["Flat Attack"], // immutable
    sands_main_stats: [], // >=1
    goblet_main_stats: [], // >=1
    circlet_main_stats: [], // >=1
  });

  // substatList is an array of stat objects with keys: label, value, selected
  // toggle substat preference at [index] to be !selected
  // consider this: https://stackoverflow.com/a/16784323 to change selected state
  function updateSubstatPreference(index) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.substats[index].selected =
      !updatedArtifactPreference.substats[index].selected;

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateSandsPreference(index) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.sands_main_stats[index].selected =
      !updatedArtifactPreference.sands_main_stats[index].selected;

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateGobletPreference(index) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.goblet_main_stats[index].selected =
      !updatedArtifactPreference.goblet_main_stats[index].selected;

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateCircletPreference(index) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.circlet_main_stats[index].selected =
      !updatedArtifactPreference.circlet_main_stats[index].selected;

    setArtifactPreference(updatedArtifactPreference);
  }

  return {
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  };
}
