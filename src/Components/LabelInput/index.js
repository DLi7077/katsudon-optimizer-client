import { TextField } from "@mui/material";

const classes = {
  statSpan: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "250px",
  },
};

export default function LabelInput({ style, label, value, onChange }) {
  return (
    <span style={{ ...classes.statSpan, ...style }}>
      <span>{label}</span>
      <TextField
        style={{ width: "min(100%,80px)" }}
        type="number"
        variant="standard"
        value={value}
        inputProps={{
          style: {
            color: "white",
            textAlign: "right",
            fontFamily: "Consolas",
            padding: 0,
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
        sx={{
          // underline color
          "& .MuiInput-underline:before": {
            borderBottomColor: "rgba(0,0,0,0)",
          },
          "& .MuiInput-underline:after": { borderBottom: "1px solid white" },
        }}
        onChange={onChange}
      />
    </span>
  );
}
