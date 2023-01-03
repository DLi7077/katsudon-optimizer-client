import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const classes = {
  container: {
    backgroundColor: "#2C2C2C",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    paddingTop: "1.5rem",
    paddingBottom: "1rem",
  },
  header: {
    fontSize: "2rem",
    fontFamily: "Consolas",
  },
  blueLine: {
    height: "2px",
    width: "90%",
    backgroundColor: "#7EE8FF",
  },
  orange: {
    color: "#FF8E26",
  },
};

export default function Header() {
  return (
    <div style={classes.container}>
      <span style={classes.header}>
        <span style={classes.orange}>{"Katsudon "}</span>
        Optimizer
        <IconButton
          // https://stackoverflow.com/a/59488629
          onClick={() => window.open("https://github.com/DLi7077/katsudon-optimizer-client", "_blank")}>
          <GitHubIcon
            style={{
              fontSize: "2rem",
              color: "white",
              padding: 0,
            }}
          />
        </IconButton>
      </span>
      <div style={classes.blueLine}></div>
    </div>
  );
}
