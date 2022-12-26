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

export default function DropdownSelect({
  options,
  value,
  onChange,
  labelItem,
}) {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, width: 150, height: "20px", padding: 0, marginInline: 0 }}>
      <Select
        sx={{
          color: "white",
          height: "20px",
          fontFamily: "Consolas",
        }}
        displayEmpty
        value={value}
        onChange={onChange}
        MenuProps={{ MenuListProps: { disablePadding: true } }}>
        {!!labelItem && (
          <MenuItem style={classes.menuItem}>
            <em>{labelItem}</em>
          </MenuItem>
        )}
        {map(options, (option) => {
          return (
            <MenuItem
              key={option.value}
              value={option.value}
              style={{
                ...classes.menuItem,
                ...(value === option.value ? { backgroundColor: "#3a3a3a" } : {}),
              }}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
