import { useState } from 'react';
// import ReactDOM from 'react-dom/client';


function Multipleinput() {
const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name; //username, age
  const value = event.target.value;
  setInputs({...inputs, [name]: value });
// console.log(event.target)
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Name: ${inputs.username}, Age: ${inputs.age}`);
  setInputs("")
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username|| ""}
        onChange={handleChange}
      />
    </label> <br/>
    <label>
      Enter your age:
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
      />
    </label>
    <input type="submit" />
  </form>
);
}
export default Multipleinput;