import React from 'react'

function Child(props) {
  return (
    <div>
      <h1>This is child component</h1>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Child