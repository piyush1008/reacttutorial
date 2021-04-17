import React,{useState} from "react";



const Time=()=>{
    let d=new Date().toLocaleTimeString();

    const [ctime,seTime]=useState(d);
    const realTime=()=>{
        let newd=new Date().toLocaleTimeString();
        seTime(newd);
    };


    return (
        <>
        <h1>{ctime}</h1>
        <button onClick={realTime}>click me</button>
        </> 
    );
}

export default  Time;