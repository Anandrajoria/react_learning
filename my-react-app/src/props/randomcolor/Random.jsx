import { useState } from "react"
import './random.css'
export default function Random({colors}){
    const [color,setColor]=useState('red')
    const changeColor=()=>{
        let randIdx=Math.floor(Math.random()*colors.length)
        setColor(colors[randIdx])
    }
    return(
        <>
            <div onClick={changeColor} style={{backgroundColor:color}}></div>
            </>
    )
}