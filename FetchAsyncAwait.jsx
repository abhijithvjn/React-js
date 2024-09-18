import React, { useEffect, useState } from 'react'

function FetchAsyncAwait() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const datafetch=async()=>{
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const  data = await response.json();
    setData(data)
    }
    catch(error){
      setError(error)
    }
  }

  //Function call
  useEffect(()=>{
    datafetch()
  },[])

  if (error){
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map(i=><p key={i.id}>{i.id} <br/>{i.title}</p>)}
    </div>
  )
}

export default FetchAsyncAwait