import { useState } from "react"

export default function Form(){
    const[username,setusername]=useState('monika')
    let updateusername=(e)=>{
        console.log('event changed');
        // console.log(e.target.value);
        setusername(e.target.value)
        
    }
    return (
        <>
            <div>
            <label htmlFor="username">enter a username</label>
                <input 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={updateusername}
                    id="username"
                />
                <button>submit</button>
            </div>
        </>
    )
}