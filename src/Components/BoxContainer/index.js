const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
  body: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: "1px solid white",
    borderTop: 0,
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "0.5rem",
    paddingInline: "1rem",
  },
};

export default function BoxContainer(props) {
  return (
    <div style={{ ...classes.container, ...props.style }}>
      {props.header}
      <div style={classes.body}>
        <div style={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}
