import React, {useState} from 'react'

function Car1() {

  const [carList, setCarList] =useState([
      { id: 1, name: "Toyota", price: 20000, status: "available" },
      { id: 2, name: "Honda", price: 25000, status: "available" },
      { id: 3, name: "Ford", price: 30000, status: "available" },
      { id: 4, name: "Toyota", price: 50000, status: "available" },
      { id: 5, name: "BMW", price: 100000, status: "available" },
      { id: 6, name: "Toyota", price: 40000, status: "available" }]);

  const changeStatus = () =>{
    setCarList(carList.map(i=> i.name==="Toyota"? {...i, status:"unavailable"} : i));
  }
  return (
    <div className='car-container serif-font'>
      <h1>Car List</h1>
      {carList.map(i=> (<p key={i.id}>{i.id}  {i.name} {i.price} {i.status}</p>))}
      <button className='carButton serif-font' onClick ={changeStatus}>Change status</button>
    </div>
  )
}

export default Car1