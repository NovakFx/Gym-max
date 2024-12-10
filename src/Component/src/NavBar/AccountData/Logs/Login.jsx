import React from 'react'
import OrLine from './OrLine'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

  return (
    <div className="ml-20 mt-24  font-roboto">
     <div className='grid grid-cols-[37%_auto] '>
      <div>
      
      <div className="leading-10">
        <h1 className="font-oswald text-4xl font-bold text-gray-800">
        Welcome Back!
        </h1>
        
        <p className="mt-2 text-gray-600">
          Sign up now and start achieving your fitness goals.
        </p>

        <form className="mt-3 max-w-lg">
   
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          id="name"
          name="fName"
          placeholder="First Name"
          className="p-3 pl-4 w-full bg-white rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />

        <br /> 

        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="name"
          name="surName"
          placeholder="Last Name"
          className="p-3 pl-4 w-full bg-white rounded-full border-2 mt-5 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />

     
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className="p-3 pl-4 w-full bg-white mt-5 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        
        
        <label htmlFor="checkBox" className='sr-only bg-green-500 p-5 ' >
          Keep me signed in
        </label>
        <div className='flex gap-4 mt-2 font-oswald'>
        <input type="checkbox" name="password" id="password" style={{
          width:'20px'
        }}  />
        <div className='flex gap-44'>
        <h1>Keep me signed in</h1>
        <button type="button">Forgot your password?</button>
        </div>

        </div>
        

      
        <button
          type="submit"
          className=" w-[85%] ml-8 mt-2 py-3 bg-yellow-300 text-black font-bold rounded-full hover:bg-primary-dark transition-all duration-300"
        >
          Login
        </button>
        <br />
         
         <OrLine />

          <button type="button" className='p-3 w-full bg-white  rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none'>
        <GoogleIcon className=' text-blue-600' />   Login with Google
          </button>

      </form>

      <div className='text-gray-500'>
        <h1>By signing up, you agree to the Terms & Conditions and Privacy Policy</h1>
      </div>

      </div>
     
      </div> 

      <div>
      <div className='pl-4 ml-2'>
        <img src="Images/gymlady.png" alt="" style={{
          borderRadius:'30px',
          width:'75%'
        }} />
      </div>
      </div>
      

     
      
      </div>
    </div>
  )
}

export default Login 