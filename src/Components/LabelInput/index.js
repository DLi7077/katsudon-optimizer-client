import { TextField } from "@mui/material";

const classes = {
  statList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  statSpan: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default function LabelInput({ label, value, updateStat }) {
  return (
    <span style={classes.statSpan}>
      <span>{label}</span>
      <TextField
        style={{ width: "min(100%,60px)" }}
        type="number"
        variant="standard"
        inputProps={{
          style: {
            color: "white",
            textAlign: "right",
            fontFamily: "Consolas",
            padding: 0,
          },
        }}
        value={value}
        sx={{
          // underline color
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:after": { borderBottomColor: "white" },
        }}
        onChange={updateStat}
      />
    </span>
  );
}
