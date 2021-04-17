import React,{useState} from "react";

const App=()=> {
  const purple="#8e44ad";
  const [bg,setBg]=useState(purple); 
  const [name,setName]=useState('click me');
  const bgchange =()=>
  {
    let newBg="#34495e";
    setBg(newBg);
    setName("ouch");
  };
  const gcchange =()=>
  {
    let newBg="#8e44ad";
    setBg(newBg);
    setName("Back to Normal ");
  };
  return (
   <>
      <div style={{ backgroundColor:bg }}>
        <button onClick={bgchange} onDoubleClick={gcchange}>{name}</button>
      </div>
   </>
  );
}

export default App;
