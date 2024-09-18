import React from 'react'
import { createContext, useContext, useState } from 'react'
const usercontext = createContext();


function Propdrillingwork() {
  const [user, setUser] = useState("Abhi");
  const [age, setAge] = useState(10)
  return (
    <div>
      <usercontext.Provider value={{user, age}}>
        
      </usercontext.Provider>
      
    </div>
  )
}

export default Propdrillingwork