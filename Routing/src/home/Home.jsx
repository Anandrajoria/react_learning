import { Outlet } from 'react-router-dom'
import Header from './Header'
function Home() {
  return (
    <>
        <Header/>
        <section><h1>home page</h1></section>
        <Outlet/>
    </>
  )
}

export default Home