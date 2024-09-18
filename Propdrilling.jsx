import React, { createContext, useContext, useState } from 'react'
const usercontext = createContext(); //globally create cheyyanam aadhyam

function Propdrilling() {
  const [name, setName] = useState("Abhi");
  const [age, setAge] = useState(20);
    return (
    <div className='main'>
      {/* Step 2*/}
      <usercontext.Provider value={{name, age}}>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <Home />
      </usercontext.Provider>
    </div>
  )
}

function Home() {
  return (
    <div className='main2'>
      <h2>Component 2 - home</h2>
      <Login />
      </div>
  )
}

function Login() {
  const data = useContext(usercontext);
  return (
    <div className='main3'>
      <h3>Component 3 - login</h3>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  )
}



export default Propdrilling