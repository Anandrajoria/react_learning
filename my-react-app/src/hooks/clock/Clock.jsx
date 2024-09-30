import React, { useState } from "react";
import './clock.css'
function Clock(){

    let time=new Date().toLocaleTimeString();
    let [curtime,setcurTime]=useState(time);

    function updateTime(){
        time=new Date().toLocaleTimeString();
        setcurTime(time)
    }

    setInterval(updateTime, 1000);

    return(
        <>
        <div className="clock">
            <h1>{curtime}</h1>
            
        </div>
        </>
    )
}

export default Clock