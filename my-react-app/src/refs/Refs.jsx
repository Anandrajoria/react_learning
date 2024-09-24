import React, { useRef, useState } from "react";

export default function Refs(){
    let ref=useRef(0);
    // let [startTime,setStartTime]=useState(null)
    // let [now ,setnow]=useState(null)

    // function handleStart(){
    //     setStartTime(Date.now())
    //     setnow(Date.now())

    //     clearInterval(ref.current)
    //     ref.current=setInterval(() => {
    //         setnow(Date.now)
    //     }, 10);
    // }

    // function handleStop() {
    //     clearInterval(ref.current);
    //   }
    
    // let secondPassed=0;
    // if(startTime!=null && now !=null){
    //     secondPassed=(now-startTime)/1000;
    // } 
    function handleClick() {
        ref.current = ref.current + 1;
    }
    return(
        <>
            {/* <h1>time passed:{secondPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>
        Stop
      </button> */}
      <button onClick={handleClick}>{ref.current} times</button>
        </>
    )
}