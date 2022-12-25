import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { map } from "lodash";

const classes = {
  menuItem: {
    color: "white",
    textAlign: "right",
    fontFamily: "Consolas",
    padding: 0,
    backgroundColor: "#606060",
  },
};

export default function DropdownSelect({ options, value, updateBuff }) {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, width: 150, height: "20px" }}>
      <Select
        sx={{ color: "white", height: "20px", fontFamily: "Consolas" }}
        displayEmpty
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          updateBuff(e.target.value);
        }}
        MenuProps={{ MenuListProps: { disablePadding: true } }}>
        <MenuItem style={classes.menuItem}>
          <em>Buffed Stat</em>
        </MenuItem>
        {map(options, (option) => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              style={classes.menuItem}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
