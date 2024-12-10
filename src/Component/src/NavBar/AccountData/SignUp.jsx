import React from 'react';

const SignUp = () => {
    // const handleClick = () =>{
    //   alert('Account created succesfully');
    // };
    
  return (
    <div className=" mt-24   font-roboto ms-auto ">
     <div className='grid grid-cols-[37%_auto] ml-14'>
      <div>
      
      <div className="leading-10">
        <h1 className="font-oswald text-4xl font-bold text-gray-800">
          Join Our Fitness Community
        </h1>
        
        <p className="mt-2 text-gray-600">
          Sign up now and start achieving your fitness goals.
        </p>

        <form className="mt-3 max-w-lg">
   
        <label htmlFor="firstName" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="fName"
          placeholder="First Name"
          className="p-4 w-full bg-white rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />

        <br /> 

        <label htmlFor="surName" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="surName"
          placeholder="Last Name"
          className="p-4 w-full bg-white rounded-full border-2 mt-4 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
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
          className="p-4 mt-4 w-full bg-white  rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />

     
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          className="p-4 w-full bg-white mt-4 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        

        <label htmlFor="checkBox" className='sr-only bg-green-500 p-5 ' >
          Email Notifications Update
        </label>
        <div className='flex gap-4 mt-4 mb-4 font-oswald'>
        <input type="checkbox" name="email" id="news" style={{
          width:'20px'
        }}  />
        
        <h1>Get email updates on new program and store launches (optional).</h1>
        </div>
        

      
        <button
          type="submit"
          // onClick={handleClick}
          id='summitButton'
          className=" w-[85%] ml-8  py-3 bg-yellow-300 text-black font-bold rounded-full hover:bg-primary-dark transition-all duration-300"
        >
          Create Account
        </button>

      </form>

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
  );
};

export default SignUp;
