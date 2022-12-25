import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
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

export default function DropdownSelect({ options, value, onChange }) {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, minWidth: 120, height: "20px" }}>
      <Select
        sx={{ color: "white", height: "20px" }}
        displayEmpty
        value={value}
        onChange={onChange}
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
