import React, { useState } from 'react'

function Usestate() {
  const [name, setName] = useState("Abhi");
  const [age, setAge] = useState("18");

  const  nameChange = () => {
    setName("Amal");
  }

  const ageChange = () => {
    setAge(32);
  }



  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={nameChange}>Update</button>
      <p>Age : {age}</p>
      <button onClick={ageChange}>Update</button>
    </div>
  )
}

export default Usestate