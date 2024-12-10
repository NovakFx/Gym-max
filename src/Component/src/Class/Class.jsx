import React from 'react'
import ImageCarousel from './ImageCarousel'

const Class = () => {



  return (
    <div className='  h-[430vh] pt-16 bg-black pl-10 font-roboto text-white '>

      <div className='  pt-3 '>
        <div className=' pt-4  '>
        <h1 className='font-oswald font-bold text-3xl text-white'>Free Workout Programs</h1>

        <div className='grid grid-cols-6 pt-7 pl-3 '>

        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>
        
        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>

        
        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>


        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>


        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>


        <div className='relative'>
          <img src="Images/yoga1.png" className='w-[76%] brightness-[30%]' alt="" />
          <h1 className="absolute top-52 text-xl text-white font-bold -rotate-90 ">Beginner Friendly</h1>
          <div>
            <button className='ml-3 mt-2 p-2 pl-9 pr-9 bg-black text-white rounded-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black'>Start Today</button>
          </div>
        </div>


        </div>

        </div>
      </div>
    
        <div className='mt-16 font-roboto'>
          <h1 className='font-oswald font-bold text-3xl pb-3'>Beginner Friendly</h1>
          <p className='text-sm'>Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have <br />low-impact alternatives.</p>

          <div className=' mt-5 w-[11%] p-2 bg-black text-white rounded-2xl border-2 border-yellow-300'>
            <h4>1938+ People Tried</h4>
          </div>
        </div>
      
        <div>
          <ImageCarousel />
        </div>
      
      </div>
  )
}

export default Class