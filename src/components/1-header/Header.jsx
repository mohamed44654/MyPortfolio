import React, { useEffect, useState } from 'react'
import './header.css'
export default function Header() {
 const[showModal,setShowModal]= useState(false);
 const [theme , setTheme] = useState(localStorage.getItem("currentMood") ?? 'dark');

 useEffect(()=>{
  if(theme === 'light'){
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }else{
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
 },[theme])

  return (
    <header className='flex'>
      
      <div></div>
      <nav>
        <ul className='flex'>
          <li><a href="#up">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='flex boxmedia'>
      <button className='menu' onClick={()=>{setShowModal(true)}}>
        <span className='icon-menu3'></span>
      </button>
      <button className='mode' 
      onClick={()=>{
        localStorage.setItem("currentMood",theme === 'dark' ? 'light' : 'dark')
        setTheme(localStorage.getItem('currentMood'))
        }}>
        { theme === "dark" ? (<span className='icon-sun'></span>) : (<span className='icon-moon-stroke'></span>)}
      </button>
      </div>
      
  {
    showModal&&(
      <div className='fixed'>
      <ul className="modal">
        <li><button className='icon-cross' onClick={()=>{setShowModal(false)}} /></li>
        <li><a href="#up">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
  </div>
    )
  }

      </header>
  )
}
