import React from 'react'

const Jokes = (props) => {
  return (
    <div>
        <h1>Setup: </h1>
        <small>Punchline: {props.first}</small>
    </div>
  )
}

export default Jokes