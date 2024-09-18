import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosPromise() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const datafetch=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      setData(response.data)
    })
    .catch(error=>{
      setError(error)
    })
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

export default AxiosPromise