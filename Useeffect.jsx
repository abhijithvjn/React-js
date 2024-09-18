import React, { useEffect, useState } from 'react'

function Useeffect() {
    const  [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const greet=()=>{
        console.log("Hello")
    }

    useEffect(()=>{
      greet();
  },[name]);

   
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Useeffect