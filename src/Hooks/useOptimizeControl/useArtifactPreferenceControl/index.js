import { useEffect, useState } from "react";
import {
  ARTIFACT_SUBSTATS,
  FLOWER_MAIN_STATS,
  FEATHER_MAIN_STATS,
  SANDS_MAIN_STATS,
  GOBLET_MAIN_STATS,
  CIRCLET_MAIN_STATS,
} from "../../../Constants/stats";

const DEFAULT_PREFERENCES = {
  substats: ARTIFACT_SUBSTATS.map((stat) => ({ ...stat, selected: false })), // >=5
  flower_main_stats: FLOWER_MAIN_STATS.map((stat) => ({
    ...stat,
    selected: true,
    disabled: true, // immutable
  })),
  feather_main_stats: FEATHER_MAIN_STATS.map((stat) => ({
    ...stat,
    selected: true,
    disabled: true, // immutable
  })),
  sands_main_stats: SANDS_MAIN_STATS.map((stat) => ({
    ...stat,
    selected: false,
  })),
  goblet_main_stats: GOBLET_MAIN_STATS.map((stat) => ({
    ...stat,
    selected: false,
  })),
  circlet_main_stats: CIRCLET_MAIN_STATS.map((stat) => ({
    ...stat,
    selected: false,
  })),
};

export default function useArtifactPreferenceControl() {
  const savedPreference = localStorage.getItem("artifact-preference")
    ? JSON.parse(localStorage.getItem("artifact-preference"))
    : DEFAULT_PREFERENCES;

  const [artifactPreference, setArtifactPreference] = useState(savedPreference);

  useEffect(() => {
    localStorage.setItem(
      "artifact-preference",
      JSON.stringify(artifactPreference)
    );
  }, [artifactPreference]);

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
