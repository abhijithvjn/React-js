import React from 'react'
import Child from './Child'

function Parent() {
  const myName="Abhi";
  return (
    <div>
      <h1>This is parent component</h1>
      <Child name={myName}/>
    </div>
  )
}

export default Parent