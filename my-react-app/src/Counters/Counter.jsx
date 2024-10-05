import React, { useState } from 'react'
import './counter.css'

function Counter() {
    let [count ,setcount]=useState(0)

    function increm(){
        setcount(count+1);
    }

    function decrem(){
        if(count===0){
            alert("can't decrease anymore")
        }else{
            setcount(count-1)
        }
        
    }
return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>{count}</h1>
                <div className='btns'>
                    <button onClick={increm}>increm</button>
                    <button onClick={decrem}>decrem</button>
                </div>
            </div>
        </div>
    </>
)
}

export default Counter
