import React from "react";

const classes = {
  container: {
    backgroundColor: "#2C2C2C",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  header: {
    fontSize: "2rem",
    fontFamily: "Consolas",
  },
  blueLine: {
    height: "2px",
    width: "max(800px,90%)",
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
      </span>
      <div style={classes.blueLine}></div>
    </div>
  );
}
