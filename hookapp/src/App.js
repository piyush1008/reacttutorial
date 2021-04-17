import React,{useState} from "react";

const App =()=>{
  const[count,setCount]=useState(1);// this line basically assign count=1 
  const IncNum=()=>{
    setCount(count+1);// then setCount is used to change the state.
  }


  return(
    <>
      <h1> {count}</h1>
      <button onClick={IncNum}>Click Me</button>

      <br></br><br></br>
    </>
  )


}

export default App;
