import React from 'react'

function Practice() {
const array = ["Amal", "Abhi", "Adhu"];

// const obj ={
//   name1 : array[0],
//   name2 : array[1],
//   name3 : array[2]
// }
// console.log(obj)
 const obj = array.reduce((arr,key,value)=>{
  arr[key]=value;
  return arr;
 },{})
 console.log(obj)


  return (
    <div>

      
    </div>
  )
}

export default Practice