// import {NavLink} from 'react-router-dom'
// import Header from './Header'
import { useNavigate } from "react-router-dom"
function About() {
    const navigate=useNavigate()
    const goToContact=()=>{
        navigate('/contact')
    }
  return (
    <>
    {/* <Header/> */}
        <section><h1>about us page</h1></section>
        <button onClick={()=>goToContact()}>go to contact us page</button>
        </>
  )
}

export default About