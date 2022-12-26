import { useState } from "react";
import ElementList from "../../../Components/Elements/ElementList";
import LabelInput from "../../../Components/LabelInput";
import { ELEMENT_BACKGROUND } from "../../../Constants/elements";
import { map, pick } from "lodash";
import BoxContainer from "../../../Components/BoxContainer";
import { Typography } from "@mui/material";
import { STAT_LABEL } from "../../../Constants/labels";
import "../styles.css";

const classes = {
  container: {
    width: "fit-content",
    display: "flex",
    justifyContent: "space-around",
    gap: "4rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  partitionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
};

export default function Character(props) {
  const [backgroundColor, setBackgroundColor] = useState(
    ELEMENT_BACKGROUND.Physical
  );

  function Header() {
    function setElement(element) {
      props.setCharacterBackgroundColor(ELEMENT_BACKGROUND[element]);
      props.updateCharacterStats("element", element);
    }

    return (
      <div style={{ ...classes.header, justifyContent: "space-between" }}>
        <span style={{ ...classes.header, gap: "1rem" }}>
          <Typography style={{ fontSize: "1.125rem" }}>Character</Typography>
          <LabelInput
            label={"Lv."}
            style={{ width: "55px" }}
            value={props.characterStats["level"]}
            onChange={(e) => {
              const updatedValue = parseFloat(e.target.value);
              props.updateCharacterStats(
                "level",
                isNaN(updatedValue) ? 0 : updatedValue
              );
            }}
          />
        </span>
        <ElementList update={setElement} />
      </div>
    );
  }

  const leftStats = pick(props.characterStats, [
    "base_attack",
    "attack_percent",
    "flat_attack",
    "base_hp",
    "hp_percent",
    "flat_hp",
    "base_def",
    "def_percent",
    "flat_def",
  ]);

  const rightStats = pick(props.characterStats, [
    "elemental_mastery",
    "energy_recharge",
    "crit_rate",
    "crit_damage",
    "damage_bonus_elemental",
    "damage_bonus_talent",
    "damage_bonus_all",
    "melt_bonus",
    "base_damage_bonus",
    "defense_shred",
    "quicken_bonus",
  ]);

  return (
    <div className="align-down-center" style={{ gap: "1rem" }}>
      <span className="section-title">Starting Stats</span>
      <BoxContainer
        header={Header()}
        style={{ backgroundColor: props.characterBackgroundColor }}>
        <div style={classes.container}>
          <div style={classes.partitionContainer}>
            {map(leftStats, (value, stat) => (
              <LabelInput
                key={`character-starting-${stat}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
                label={STAT_LABEL[stat]}
                value={value}
                onChange={(e) => {
                  const updatedValue = parseFloat(e.target.value);
                  props.updateCharacterStats(
                    stat,
                    isNaN(updatedValue) ? 0 : updatedValue
                  );
                }}
              />
            ))}
          </div>
          <div style={classes.partitionContainer}>
            {map(rightStats, (value, stat) => (
              <LabelInput
                key={`character-starting-${stat}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
                label={STAT_LABEL[stat]}
                value={value}
                onChange={(e) => {
                  const updatedValue = parseFloat(e.target.value);
                  props.updateCharacterStats(
                    stat,
                    isNaN(updatedValue) ? 0 : updatedValue
                  );
                }}
              />
            ))}
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
