import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogsData = () => {
  const navigate = useNavigate ();
  const handleButtonClick = () =>{
    navigate('/Login')
  }

  const navigates = useNavigate ();
  const handleButtonClicks = () =>{
    navigates('/SignUp')
  }
  return (
    <div className='justify-items-center mt-20 ms-auto'>
      <img src="Images/settingLogo.png" alt="Logo" style={{
        width:'20%',
        marginLeft:'45px'
      }} />
      <div className='mt-4 justify-items-center'>
        <h1 className='font-oswald font-bold text-3xl'>Welcome Back</h1>
        <p className='text-lg'>Please log in to view your account.</p>
      </div>
      <div className='mt-3 mb-3 '>
      <button onClick={handleButtonClick} className='bg-black font-oswald  text-white opacity-60 w-72 p-2  hover:bg-white hover:text-black hover:opacity-100   border-black b'style={{
        borderWidth:'1px'
      }} >
          LOG IN
      </button>
      </div>

      <div>
      Don't have an account? 
      <button onClick={handleButtonClicks} className='ml-1 hover:text-orange-500 underline  ' style={{
        textDecorationColor:'orange'
      }}>Create one now.</button>
      </div>

    </div>
  )
}

export default LogsData