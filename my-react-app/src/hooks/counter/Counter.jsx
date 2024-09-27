import React, { useState } from "react";

function Counter(){
    const [count ,setcount]=useState(0)

    function increase(){
        setcount(count+1)
    }
    return(
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={increase}>click me</button>
            </div>
        </>
    )
}

export default Counter