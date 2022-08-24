import React from 'react'

const Jokes = (props) => {
  return (
    <div>
        <h1>Setup: {props.second}</h1>
        <p>Punchline: {props.first}</p>
        <p></p>
    </div>
  )
}

export default Jokes