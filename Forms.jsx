import React, { useState } from 'react'

function Forms() {
  const [name, setName]=useState("");

  const handlechange=(event)=>{
    setName(event.target.value)
  }

  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log(`The entered name: ${name}`)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor='flname'>First Name:</label>
        <input id='flname' type="text" name="fname" value={name} onChange={handlechange} />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Forms