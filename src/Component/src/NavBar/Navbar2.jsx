import React from 'react'
import { Link } from 'react-router-dom/dist'

const Navbar2 = () => {
  return (
    <div>
      <div className='bg-black pb-3 fixed top-0 left-0 w-full z-50 transition-all duration-300y text-white'>         
    <header className='flex ml-10 '>
      <nav className='font-oswald  mt-3' >
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
    </div>
  )
}

export default Navbar2