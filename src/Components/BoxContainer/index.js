const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: 'fit-content',
  },
  body: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: '1px solid white',
    borderTop: 0
  },
};


export default function BoxContainer(props) {
  return (
    <div style={{ ...classes.container, ...props.style }}>
      {props.header}
      <div style={classes.body}>{props.children}</div>
    </div>
  );
}
