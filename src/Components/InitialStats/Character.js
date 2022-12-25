import { useState } from "react";
import ElementList from "../Elements/ElementList";
import LabelInput from "../LabelInput";
import { INITIAL_CHARACTER_STATS } from "../../Constants/Initial/character";
import { ELEMENT_BACKGROUND } from "../../Constants/elements";
import { map } from "lodash";
import BoxContainer from "../BoxContainer";

import useObjectForm from "../../Hooks/useObjectForm";
import { Typography } from "@mui/material";

const classes = {
  header: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '32px',
    paddingInline: "1rem",
    backgroundColor: '#1F2329',
    border: '1px solid white'
  },
  container: {
    width: 'fit-content',
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "space-around",
    gap: "4rem",
    padding: '0.5rem',
    paddingInline: '1rem',
  },
  partitionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
};

export default function Character() {
  const { leftStats, rightStats } = INITIAL_CHARACTER_STATS;
  const [backgroundColor, setBackgroundColor] = useState(ELEMENT_BACKGROUND.Physical)
  const [characterStats, setCharacterStats] =
    useObjectForm(
      map([...leftStats, ...rightStats], (stats) => stats.value), { element: null }
    );

  function Header() {
    function updateBackgroundColor(element) {
      setBackgroundColor(ELEMENT_BACKGROUND[element]);
    }

    return <span style={classes.header}>
      <Typography style={{ fontSize: '1.25rem' }}> Character </Typography>
      <ElementList update={updateBackgroundColor} />
    </span>
  }

  return <BoxContainer header={Header()} style={{ backgroundColor: backgroundColor }}>
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
