import React from 'react'
import ChildComponent from './ChildComponent'
function Parentcomponent() {
  return (
    <div>
       <ChildComponent name="Alice" age={25} />
    </div>
  )
}

export default Parentcomponent