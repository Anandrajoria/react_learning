import './sidebar.css'

function SideBar() {
  return (
    <>
        <div className='sidemenu'>
            <div className='dots'>
                <div className='div dot'></div>
                <div className='div dot'></div>
                <div className='div dot'></div>
            </div>

            <div className='logo'><i className='bi bi-lightning-charge'></i></div>
            <ul>
                <li>
                    <a href="#"><i className='bi bi-house'></i>home</a>
                </li>
                <li>
                    <a href="#"><i className='bi bi-person'></i>about</a>
                </li>
                <li>
                    <a href="#"><i className='bi bi-archive'></i>service</a>
                </li>
                <li>
                    <a href="#"><i className='bi bi-chat'></i>contact</a>
                </li>
            </ul>
            <i className='bi bi-box-arrow-right exit'></i>
        </div>
    </>
  )
}

export default SideBar