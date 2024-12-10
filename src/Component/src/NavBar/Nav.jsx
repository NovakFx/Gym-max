import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom/dist'


const Nav = () => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY > 1) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black text-white pb-3" : "bg-transparent "  
    }`}>               
    <header className='flex'>
      <nav className='font-oswald  mx-auto justify-between items-center sm:block' >
        <ul className='flex gap-20 mt-3 text-xl'>
          <div className='w-16'> <img src="Images/logo.png" alt="" /> </div>
          <span className='flex gap-16 ml-96 font-bold cursor-pointer'>
          <Link to='/' className='hover:underline' >Home</Link> 
          <Link to='/Class' className='hover:underline' >Class</Link>
          <Link to='/Trainers' className='hover:underline'>Trainers</Link>
          <Link to='/Contact' className='hover:underline'>Contact</Link>
          </span>
          <div className='ml-36 bg-orange-500 rounded-2xl p-1 pl-5 pr-5 text-white'> 
          <Link to='/LogsData'>Login</Link>
          </div> 
        </ul>  
      </nav>
    </header>
    
  </div>
  )
}

export default Nav    