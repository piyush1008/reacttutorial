import React,{useState,useEffect} from 'react';

function Body() {
    const [num,setNum]=useState(0);
    useEffect(()=>{
        alert("hello i am clicked");
    })
    return (
        <>
            <h1> Piyush Dubey</h1>
            <button onClick={()=>
                {setNum(num+1);}} > 
                Click me {num}
            </button>
        </>
    )
}

export default Body;
