import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation();
  return (
    <div>
      <h1>This is login page</h1>
      <h3>Welcome! {location.state.name}</h3>
      <h3>Age :  {location.state.age}</h3>
    </div>
  )
}

export default Login