import React, { useEffect, useState } from 'react';
import './style.css'
import './ToggleButton.css'
import './socialIcon.css'
export default function Script(){

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--main-bg-color', '#000');
            document.documentElement.style.setProperty('--main-text-color', '#fff');
        } else {
            document.documentElement.style.setProperty('--main-bg-color', '#fff');
            document.documentElement.style.setProperty('--main-text-color', '#000');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };


    return(
        <>
            <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">contact us</a></li>
            
    
        <label className="switch">
            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
            <input 
                type="checkbox" 
                className="input" 
                id="themeToggle"
                onChange={handleThemeChange}
                />
            <span className="slider"></span>
        </label>
        </ul>
            </nav>

    <div className="center">
        <div className="s1">
            <h1>Aditya Rajoriya</h1>
            <h2> a full stack developer, this is my portfolio website. i am open for freelance work</h2>
            <button>Resume  
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>

            
            </button>
        </div>
        <img src="../public/anand.jpg" alt="my photo"/>
    </div>

        <div className="social">
            <div className="item">
                <a href="#" className="fa fa-linkedin"></a>
                <span>aditya rajoriya</span>
            </div>
            <div className="item">
                <a href="#" className="fa fa-instagram"></a>
                <span>@anandprajapat941</span>
            </div>
            <div className="item">
                <a href="#" className="fa fa-github"></a>
                <span>adityarajoriya</span>
            </div>
            <div className="item">
                <a href="#" className="fa fa-google"></a>
                <span>anandrajoriya03@gmail.com</span>
            </div>
        </div>
    
        </>
    )
}