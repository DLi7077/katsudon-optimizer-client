import React from "react";
import FlowerStatPreference from "./FlowerStatPreference";
import FeatherStatPreference from "./FeatherStatPreference";

const classes = {
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
};

function doNothing() {}

export default function MainStatPreference(props) {
  return (
    <div className="align-down-center" style={{ gap: "1rem" }}>
      <div style={classes.title}>
        <div style={{ fontSize: "1.5rem" }}>Substat Preferences</div>
        <div style={{ color: "#C68C62" }}>
          *pick at least 1 main stat per artifact peice
        </div>
      </div>
      <div className="align-horizontal-center" style={{ gap: "4rem" }}>
        <FlowerStatPreference
          mainStats={props.flowerMainStats}
          update={doNothing}
        />
        <FeatherStatPreference
          mainStats={props.featherMainStats}
          update={doNothing}
        />
      </div>
      <div className="align-horizontal-center" style={{ gap: "4rem" }}>

      </div>
    </div>
  );
}
