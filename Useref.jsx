import React from 'react'
import { useState, useRef } from 'react';

function Useref() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increment=()=>{
    setCount(count+1);
  }

  const  incrementRef=()=>{
    countRef.current= countRef.current+1;
    console.log(countRef.current)
  }
  return (
    <div>
      <u><h1>useState Hook</h1></u>
        <h3>Count: {count}</h3>
        <button onClick={increment}>inc State Count</button>

      <u><h1>useRef Hook</h1></u>
        <h3>Ref Count: {countRef.current}</h3>
        <button onClick={incrementRef}>inc Ref Count</button>
    </div>

  )
}

export default Useref