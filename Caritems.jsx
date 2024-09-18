import React from 'react'

function Caritems() {

const cars = [
  {
  id: 1,
  name: "Toyota",
  price: 20000,
  details: {
  features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
  availability: { status: "In Stock", location: "Showroom A" }
  }
  },
  {
  id: 2,
  name: "Honda",
  price: 25000,
  details: {
  features: ["Navigation System", "Leather Seats", "Sunroof"],
  availability: { status: "Pre-Order", location: "Showroom B" }
  }
  },
  {
  id: 3,
  name: "Ford",
  price: 30000,
  details: {
  features: ["Apple CarPlay", "Adaptive Cruise Control", "Blind Spot Monitoring"],
  availability: { status: "In Stock", location: "Showroom C" }
  }
  },
  {
  id: 4,
  name: "Toyota",
  price: 50000,
  details: {
  features: ["Heated Seats", "Navigation System", "Rear Parking Sensors"],
  availability: { status: "In Stock", location: "Showroom A" }
  }
  },
  {
  id: 5,
  name: "BMW",
  price: 100000,
  details: {
  features: ["Leather Upholstery", "Premium Sound System", "Heads-Up Display"],
  availability: { status: "In Stock", location: "Showroom B" }
  }
  },
  {
  id: 6,
  name: "Toyota",
  price: 40000,
  details: {
  features: ["Navigation System", "Panoramic Sunroof", "Smart Key"],
  availability: { status: "Pre-Order", location: "Showroom C" }
  }
  }
 ];

 



  return (
    <div>
      <ol>
        <h2>1) Name & price of each car</h2>
        {cars.map(i=> <p key={i.id}><b>Name:</b> {i.name} <br/> <b>Price:</b> {i.price}</p>)}
      </ol>

      <ol>
        <h2>2) First two features of each car</h2>
        {cars.map(i => <p key={i.id}><b>Name:</b> {i.name} <br/> <b>Features:</b> {i.details.features.slice(0, 2).join(', ')}</p>)}
      </ol>

      <ol>
        {<h2>3) Status availability of each car</h2>}
        {cars.map(i => <p key={i.id}><b>Name:</b> {i.name} <br/> <b>Status availability:</b> {i.details.availability.status}</p>)}
      </ol>

      <ol>
        {<h2>4) Availability location of car Toyota</h2>}
        {cars.filter(i => i.name==='Toyota').map(i=> <p key={i.id}><b>Car ID:</b> {i.id} <br/>  <b>Availability location:</b> {i.details.availability.location}</p>)}

      </ol>

      <ol>
        {<h2>5)Location of car having availability status "Pre-Order"</h2>}
        {cars.filter(i => i.details.availability.status==='Pre-Order').map(i=> <p key={i.id}><b>Car ID:</b> {i.id} <br/> <b>Name:</b> {i.name} <br/> <b>Location:</b> {i.details.availability.location}</p>)}
      </ol>

      <ol>
        {<h2>6)Name, price, and features of the cars available on Showroom A.</h2>}
        {cars.filter(i => i.details.availability.location==='Showroom C').map(i=> <p key={i.id}><b>Name:</b> {i.name} <br/> <b>Price:</b> {i.price} <br/> <b>Features:</b> {i.details.features.join(', ')}</p>)}
      </ol>
      
    </div>

    
  )
}

export default Caritems