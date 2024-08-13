import { useState } from "react";

function generateArray(){
    console.log('making a game board');
    return Array(5000)
}

export default function Dombo(){
    let [board,setboard]=useState(generateArray)
    return(
        <>
        <button onClick={()=>setboard('hello')}>click me to change state</button>
        </>
    )
}

