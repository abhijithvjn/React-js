import React, { useEffect, useState } from 'react'
import axios from 'axios'


function AxiosAsync() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const datafetch=async()=>{
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
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

export default AxiosAsync