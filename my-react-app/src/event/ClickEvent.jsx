import React, { useState } from 'react'

function ClickEvent() {
  let purple='yellow'
  const [bg,setbg]=useState(purple)
  const [name,sestname]=useState('click me');

  function bgChange(){
    let newbg='#34495e';
    setbg(newbg)
    sestname('ooooo😮')
  }

  function newbgchange(){
    setbg(purple)
    sestname('click me')
  }
  function bgback(){
    setbg('black')
    sestname('krishna')
  }

  return (
    <>
    <div style={{backgroundColor:bg}}>
      <button onClick={bgChange} onDoubleClick={newbgchange} onMouseOver={bgback}>{name}</button>
    </div>
    </>
  )
}

export default ClickEvent