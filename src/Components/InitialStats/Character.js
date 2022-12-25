import React from "react";
import ElementList from "../Elements/ElementList";
import LabelInput from "../LabelInput";
import { INITIAL_CHARACTER_STATS } from "../../Constants/Initial/character";
import { map } from "lodash";
import BoxContainer from "../BoxContainer";

import useObjectForm from "../../Hooks/useObjectForm";
import { Typography } from "@mui/material";

const classes = {
  container: {
    width: 'fit-content',
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "space-around",
    gap: "4rem",
    paddingInline: '1rem'
  },
  partitionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
};

export default function Character() {
  const { leftStats, rightStats } = INITIAL_CHARACTER_STATS;
  const [characterStats, setCharacterStats] = useObjectForm(
    map([...leftStats, ...rightStats], (stats) => stats.value)
  );

  function Header() {
    return <Typography> Character </Typography>
  }

  return <BoxContainer>
    <div style={classes.container}>
      <div style={classes.partitionContainer}>
        {map(leftStats, (statAttributes, idx) => {
          const { label, value } = statAttributes;
          return (
            <LabelInput
              key={idx}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.5)' }}
              label={label}
              value={characterStats[value]}

              updateStat={(e) => {
                const updatedValue = parseFloat(e.target.value);
                setCharacterStats({ ...characterStats, [value]: updatedValue });
              }}
            />
          );
        })}
      </div>
      <div style={classes.partitionContainer}>
        {map(rightStats, (statAttributes, idx) => {
          const { label, value } = statAttributes;
          return (
            <LabelInput
              key={idx}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.5)' }}
              label={label}
              value={characterStats[value]}
              updateStat={(e) => {
                const updatedValue = parseFloat(e.target.value);
                setCharacterStats({ ...characterStats, [value]: updatedValue });
              }}
            />
          );
        })}
      </div>
    </div>
  </BoxContainer>

}
