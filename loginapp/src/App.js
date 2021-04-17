import React,{useState} from "react";

function App() {
  const [name,setName]=useState("");
  const [fullname,setFullName]=useState();
  const[lastname,setLastName]=useState('');
  const [newLastName,setNewLastName]=useState();

  const inputEventTwo=(event)=>{
      setLastName(event.target.value);
  }

  const inputEvent=(event)=>{
    setName(event.target.value);
  }
  const textPlaced=()=>{
      setFullName(name);
      setNewLastName(lastname);
  }
  return (
    <>
    <h1>HELLO {fullname} {newLastName}</h1>
    <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}></input><br></br>
    <input type="text" placeholder="Enter your password" onChange={inputEventTwo} value={lastname}></input>
    <button onClick={textPlaced}>Submit</button>
    </>
  );
}

export default App;
