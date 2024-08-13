import {v4 as uuid} from 'uuid'
import { useState } from "react"

export default function EmojiClicker(){
        let [emoji,setemoji]=useState([{id:uuid() ,emoji:'🫠'}])
    function addemoji(){
        setemoji((oldemoji)=>{
            return [...oldemoji,{id:uuid() ,emoji:'😉'}]
        })
    }

function deleteEmoji(id){
    setemoji(prevEmoji=>{
        return prevEmoji.filter(e=>e.id!==id)
    })
    
}
    return(
        <div>
        {emoji.map((e)=>(
            <span onClick={()=>deleteEmoji(e.id)} key={e.id} style={{fontSize:'4rem'}}>{e.emoji}</span>
        ))}
            <button onClick={addemoji}>add emoji</button>
        </div>
    )
}