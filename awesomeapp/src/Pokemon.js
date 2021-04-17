import React,{useState,useEffect} from 'react';
import axios from "axios";

function Pokemon() {
    const [number,setNumber]=useState();
    const [name,setName]=useState();
    const [move,setMove]=useState();
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
            console.log(res);
            setNumber(res.data.name);
            setMove(res.data.moves.length);
        }

        getData(); //we need to call the function also .
    });
    
    return (
        <>
        <h1> You choose {number} value.</h1>
        <h1> My Name is  {name} </h1>
        <h1> I have  {move} </h1>
            <select value={number} onChange={(e)=>{
                setNumber(e.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select> 
        </>
    )
}

export default Pokemon;
