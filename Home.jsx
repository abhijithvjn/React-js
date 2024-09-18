import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const  navigate = useNavigate();
  const handleClick = () =>{
    navigate('/loginpage', {state:{
      name : "Abhi",
      age : 20
    }});
  }
  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Home