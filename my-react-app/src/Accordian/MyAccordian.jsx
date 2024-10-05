import React, { useState } from 'react'
import './accordian.css'

function MyAccordian({question,answer}) {
    const [show ,setshow]=useState(false);


  return (
    <>
    <div className='main-heading'>
        <p onClick={()=>setshow(!show)}>{show ? "➖":"➕"}</p>
        <h1>{question}</h1>
    </div>

    {
        show && <p className='answers'>{answer}</p>
    }
    
    </>
  )
}

export default MyAccordian