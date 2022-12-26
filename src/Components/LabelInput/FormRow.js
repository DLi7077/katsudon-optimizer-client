const classes = {
  span: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    margin: 0,
    padding: 0,
  },
};

export default function FormRow(props) {
  return (
    <div style={{ ...classes.span, ...props.style }}>{props.children}</div>
  );
}
