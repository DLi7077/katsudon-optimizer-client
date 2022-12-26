const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    height: "32px",
    fontSize: "1.25",
    border: "1px solid white",
    paddingInline: "1rem",
    backgroundColor: "#1F2329",
  },
  body: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: "1px solid white",
    borderTop: 0,
    minWidth: "283px",
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "0.25rem",
    paddingInline: "1rem",
  },
};

export default function BoxContainer(props) {
  return (
    <div style={{ ...classes.container, ...props.style }}>
      <div style={classes.header}>{props.header}</div>
      <div style={classes.body}>
        <div style={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}
