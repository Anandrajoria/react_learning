// import React from 'react'
import './keepUp.css'
function Footer() {
  const year=new Date().getFullYear()
  return (
    <>
        <div className='footer_foot'>      
            <p>copyright &copy; {year}</p>
        </div>
  
    </>
  )
}

export default Footer