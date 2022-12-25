import React from 'react'

const classes = {
  background: {
    backgroundColor: "#2C2C2C",
    height: '1080px',
    padding: '3rem'
  }
}

export default function Initial() {
  return (
    <div style={classes.background}>
      <Character />
    </div>
  )
}
