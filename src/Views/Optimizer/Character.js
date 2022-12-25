import { useState } from "react";
import ElementList from "../../Components/Elements/ElementList";
import LabelInput from "../../Components/LabelInput";
import { ELEMENT_BACKGROUND } from "../../Constants/elements";
import { map, pick } from "lodash";
import BoxContainer from "../../Components/BoxContainer";
import { Typography } from "@mui/material";
import { STAT_LABEL } from "../../Constants/labels";

const classes = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "32px",
    paddingInline: "1rem",
    backgroundColor: "#1F2329",
    border: "1px solid white",
  },
  container: {
    width: "fit-content",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "space-around",
    gap: "4rem",
    padding: "0.5rem",
    paddingInline: "1rem",
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
      setBackgroundColor(ELEMENT_BACKGROUND[element]);
      props.updateCharacterStats("element", element);
    }

    return (
      <span style={classes.header}>
        <Typography style={{ fontSize: "1.25rem" }}> Character </Typography>
        <LabelInput
          label={"Lv."}
          style={{ width: "70px" }}
          value={props.characterStats["level"]}
          updateStat={(e) => {
            const updatedValue = parseFloat(e.target.value) ?? 0;
            props.updateCharacterStats("level", updatedValue);
          }}
        />
        <ElementList update={setElement} />
      </span>
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
    "elemental_mastery",
    "energy_recharge",
  ]);

  const rightStats = pick(props.characterStats, [
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
    <BoxContainer
      header={Header()}
      style={{ backgroundColor: backgroundColor }}>
      <div style={classes.container}>
        <div style={classes.partitionContainer}>
          {map(leftStats, (value, stat) => (
            <LabelInput
              key={`character-starting-${stat}`}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
              label={STAT_LABEL[stat]}
              value={value}
              updateStat={(e) => {
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
              updateStat={(e) => {
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
  );
}
