import React from 'react'

function Car() {
  const cars=[
    {id:1,name:"Toyota",price:20000},
    {id:2,name:"Honda",price:25000},
    {id:3,name:"Ford",price:30000},
    {id:4,name:"Toyota",price:50000},
    {id:5,name:"BMW",price:100000},
    {id:6,name:"Toyota",price:40000}
  ]

  function Carlist(props) {
    return (
      <div>
          <p> {props.name}  {props.price}</p>
      </div>
    )
  }
  //const display=(id, price)=>{
//alert(`ID: ${id} & PRICE: ${price}`)
 // }

  //const filteredcars= cars.filter(i=>i.name==='Toyota');
  //console.log(filteredcars)

  return (
    <div>
      <u><h1>List of Cars</h1></u>
      {/*cars.map(i=><p key={i.id}>{i.id} <br/>{i.name} <br/>{i.price}</p>)*/}
      
      {/*using unordered list*/}
      <ul>
        {/*cars.map(i=> <li key={i.id}>{i.name} - {i.price}</li>)*/}
      </ul>

      <ol>
        {/*filteredcars.map(i=><li key={i.id}>{i.name} - {i.price}</li>)*/}
      
        {/*cars.filter(i=>i.name==='Toyota').map(i=><li key={i.id}>{i.name} - {i.price}</li>)*/}
      </ol>

      {/*conditional rendering*/}
      {/*cars.map(i=> i.name==='Toyota' && <p key={i.id}>{i.id} - {i.price}</p>)*/}

      {/*cars.map(i=> i.name==='Toyota' ? <p key={i.id}>This car is Toyota</p> : <p>Car is not Toyota</p>)*/}

      {/*cars.map(i=> <button key={i.id} onClick={()=>display(i.id,i.price)}>{i.name}</button>)*/}
      {cars.map(i=> <Carlist  key={i.id} name={i.name} price={i.price}/>)}

    </div>
  )
}

export default Car