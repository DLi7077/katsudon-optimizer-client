import NumberInput from "./NumberInput";

const classes = {
  statSpan: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "250px",
  },
};

export default function LabelInput({ style, label, value, onChange }) {
  return (
    <span style={{ ...classes.statSpan, ...style }}>
      <span>{label}</span>
      <NumberInput
        style={{ width: "min(100%,69px)" }}
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
