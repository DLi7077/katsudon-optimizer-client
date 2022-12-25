import { TextField } from "@mui/material";

const classes = {
  statSpan: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '250px',
  },
  spaceSpan: {
    height: '14px'
  }
};

export default function LabelInput({ style, label, value, updateStat }) {
  if (!label) return <span style={classes.spaceSpan}></span>
  return (
    <span style={{ ...classes.statSpan, ...style }}>
      <span>{label}</span>
      <TextField
        style={{ width: "min(100%,80px)" }}
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
          "& .MuiInput-underline:before": { borderBottomColor: "rgba(0,0,0,0)" },
          "& .MuiInput-underline:after": { borderBottom: "1px solid white" },
        }}
        onChange={updateStat}
      />
    </span>
  );
}
