import React, { useState } from 'react'
import {question} from './data'
import './accordian.css'
import MyAccordian from './MyAccordian'

function Accordian() {
    const [data,setdata]=useState(question)
  return (
    <>
    <section className='main-div'>
    <h1>react interview questions </h1>
        {data.map((cur)=>{
            return <MyAccordian key={cur.id} {...cur}/>
        })}
    </section>
    </>
  )
}

export default Accordian