import { useState } from "react"

export default function Togglor(){
    let [ishappy,sethappy]=useState(true)
    let [count,setcount]=useState(0)
    let toggle=()=>{sethappy(!ishappy)}
    let counter=()=>{setcount(count+1)}
    return(
        <div>
            <h1 onClick={toggle}>
            {ishappy?'🫠':'😮'}
            </h1>

            <p>{count}</p>
            <button  onClick={counter}>+</button>
        </div>
    )
}