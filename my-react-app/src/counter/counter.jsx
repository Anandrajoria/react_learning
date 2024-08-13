import { useState } from "react";

export default function Counter(){
    const [count,setcount]=useState(0);

    let addOne=()=>{
        setcount(count+1)
    }

    const addThree=()=>{
        setcount(c=>c+1)
        setcount(c=>c+1)
        setcount(c=>c+1)
        
    }
    return(
        <>
            <div>
                <p>count:{count}</p>
                <button onClick={addOne}>+1</button>
                <button onClick={addThree}>+3</button>
            </div>
        </>
    )
}