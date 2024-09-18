import React, { useEffect, useState } from 'react'

function Datafetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  const getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response=>{
      console.log(response);
      return response.json() //parsing
    })
    .then(fetcheddata=>{
      setData(fetcheddata)
    })
    .catch(error=>{
      setError(error)
    })
  }

  //Function call
  useEffect(()=>{
    getData()
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

export default Datafetch