import React,{useState} from "react";


const App=()=>{
  let ctime=new Date().toLocaleTimeString();

  const [newctime,setCtime]=useState(ctime);
  const updateTime=()=>{
    ctime=new Date().toLocaleTimeString();
    setCtime(ctime);
  }
  setInterval(updateTime,1000);
  return(
    <>
      <h1>{newctime}</h1>
    </>

  )
}
export default App;


