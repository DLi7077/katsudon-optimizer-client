import React from "react";
import { Button } from "@mui/material";

const classes = {
  optimize: {
    backgroundColor: "#AC6546",
    textTransform: "none",
    borderRadius: 0,
    fontFamily: "Consolas",
    fontSize: "1.5rem",
    padding: "0.1rem",
    paddingInline: "2rem",
  },
};

export default function OptimizeButton(props) {
  return (
    <Button style={classes.optimize} onClick={props.onClick}>
      Optimize!
    </Button>
  );
}
