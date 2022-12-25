const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: 'fit-content'
  },
  body: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: 'green',
  },
};


export default function BoxContainer(props) {
  return (
    <div style={classes.container}>
      {props.header}
      <div style={classes.body}>{props.children}</div>
    </div>
  );
}
