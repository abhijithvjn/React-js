import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default ChildComponent