import React from 'react'
import {  motion } from 'framer-motion'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import Marquee from "react-fast-marquee";
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div className="  h-[430vh] mt-20 bg-black  font-roboto ">
      <div className=" grid grid-cols-2 h-[100vh] bg-white pt-3 pl-10 font-roboto  rounded-b-3xl ">
        <span className='relative'> 
        <h2 className='text-xs font-medium'>THE BEST FITNESS CLUB IN THE TOWN</h2>
        <h1 className='font-oswald font-bold text-[340%] w-[80%] leading-[112%] mt-6 shadow-slate-500 drop-shadow-2xl'>IMPROVE YOUR  FITNESS LEVEL FOR THE BETTER</h1>
        <div className='absolute top-9 w-16 ml-[62%]'>
        <motion.img
              whileDrag={{scale:2}}
              drag
            src="Images/Group41.png"
            alt="Rotating"             
            animate={{ rotate: 360, }}
            transition={{
              repeat: Infinity, 
              duration: 3,      
              ease: "linear", 
            }}
        /></div>
        </span>
          <div className=' ml-40 mt-4'>
            <div className="w-24 ml-48">
            <motion.img 
                src='Images/Group42.png'
                alt='Up and Down'
                animate={{ y: [0,-20,0] }}
                transition={{ 
                  repeat: Infinity,
                  duration:2,
                  ease: 'easeInOut' ,
                 }}
            /></div>
              <div className='flex gap-11 mt-14 '>
                <motion.button 
                whileHover={{scale: 1.2}}
                whileTap={{scale: 1}}
                // whileDrag={{scale: 2}}
                // drag
                className='bg-orange-500 text-white p-3 pl-5 pr-5 rounded-3xl '>BE A MEMBER</motion.button>
                <motion.button
                whileHover={{scale: 1.2}}
                whileTap={{scale: 1}}
                className='border-orange-500 border-2 bg-white  p-3 pl-9 pr-9 rounded-3xl '>LEARN MORE</motion.button>
              </div>
            </div>      
            <div className='grid grid-cols-2 mt-6 animate-slideIn '>
              <div className='w-[165%] overflow-hidden '>
                <img src="Images/gym1.png" alt="" className='' />
                <div className='absolute top-[34%] bg-red-700 ml-8 p-8 hidden text-white w-[68%] text-lg mt-2 rounded-2xl'>
              <h2 className=' '>Gym session or brisk walk can help physical activity stimulates many chemicals that may leave you Gym session or brisk walk can help. physical activity stimulates many chemicals that may leave you </h2>
              </div>
              </div>
            </div> 
            <span className="w-[83%] mt-5 "> <img src="Images/gym2.png" alt="" className='animate-slideOut' /> </span>  
              
      </div>

      <div className='grid grid-cols-4 ml-6 mt-5 bg-customBlack w-[96%] p-10  rounded-full text-white'>
          <div className='font-bold'>
            <h1>500+ <br />Happy Members <br /><span className='font-normal text-xs'>Our community is growing fast!</span></h1>
          </div>
          <div className='font-bold'>
            <h1>30+ <br />Weekly classes <br /><span className='font-normal text-xs'>Pic from various workouts</span></h1>
          </div>
          <div className='font-bold'>
            <h1>99% <br />Certified Trainers <br /><span className='font-normal text-xs'>Guidance at every step</span></h1>
          </div>
          <div className='font-bold'>
            <h1>99% <br />Customer satisfaction <br /><span className='font-normal text-xs'>We ensure your progress satisfaction</span></h1>
          </div>
      </div>

       <div className='text-white'>
          <div className=" mt-11 justify-items-center">
          <h1 className='text-4xl font-oswald font-bold mb-3'>Why Choose Us</h1>
          <p className='text-slate-300'>When picking a gym, consider its amenities like guest access,<br /> hours, location, and extra benefits to enhance your experience. </p>
          </div>


            <div className='grid grid-cols-3 w-[80%] bg-customBlack ml-32 p-8 rounded-3xl mt-5'>
                 <div>
                  <div className='pb-5 '>
                    <h1 className='text-2xl pb-3 font-bold'><FitnessCenterRoundedIcon style={{
                      color:'black',
                      borderRadius:'50px',
                      background:'rgba(255, 118, 5, 1)',
                      padding:'5px',
                      marginRight:'10px',
                      fontSize:'25px',
                    }} />Facility  Amenities </h1>
                    <p className='w-64 text-xs ml-10'>Experience state-of-the-art equipment, spacious workout areas, and premium amenities designed for your comfort and convenience.</p>
                  </div>
                  <div>
                  <h1 className='text-2xl pb-3 font-bold'><FitnessCenterRoundedIcon style={{
                      color:'black',
                      borderRadius:'50px',
                      background:'rgba(255, 118, 5, 1)',
                      padding:'5px',
                      marginRight:'10px',
                      fontSize:'25px',
                    }} />Trainer Qualifications</h1>
                  <p className='w-60 text-xs ml-10'>Our trainers are highly qualified professionals with extensive experience in fitness and health.</p>
                  </div>
                 </div>

                 <div>
                 <div className='pb-5 '>
                    <h1 className='text-2xl pb-3 font-bold'><FitnessCenterRoundedIcon style={{
                      color:'black',
                      borderRadius:'50px',
                      background:'rgba(255, 118, 5, 1)',
                      padding:'5px',
                      marginRight:'10px',
                      fontSize:'25px',
                    }} />Membership Cost </h1>
                    <p className='w-64 text-xs ml-10'>Choose from flexible, affordable plans designed to match your fitness goals. Enjoy great value and exclusive access to our top-notch facilities.</p>
                  </div>

                  <div className='pb-5 '>
                    <h1 className='text-2xl pb-3 font-bold'><FitnessCenterRoundedIcon style={{
                      color:'black',
                      borderRadius:'50px',
                      background:'rgba(255, 118, 5, 1)',
                      padding:'5px',
                      marginRight:'10px',
                      fontSize:'25px',
                    }} />Operating Hours </h1>
                    <p className='w-64 text-xs ml-10'>We are open seven days a week with extended hours to accommodate your busy schedule. Whether you prefer early morning workouts or late-night sessions, we’ve got you covered.</p>
                  </div>
                 </div>


                 <div className='w-[120] mt-5 '>
                  <img src="Images/image39.png"  alt="" />
                 </div>
            </div>   
            
            <div className='justify-items-center mt-14 '>
              <h1 className='text-3xl font-oswald font-bold  mb-3 mt-16'>Meet Our Trainers</h1>
              <p className=' text-slate-300 text-sm'>Whether you're building strength, improving flexibility, or starting a transformation,<br /> our trainers are here to help you reach your goals with personalized guidance.</p>
            </div>

            <div className='mt-20'>
              <Marquee 
                direction="left" speed={50}  gradient={false}
                style={{  overflow: "hidden" }}
                >

               <div className='grid grid-cols-4 gap-5'>
                <div className='relative'>
               <img  style={{ width: "350px", height: "auto" }}
               src="Images/image41.png" alt="" />
               <div  className='absolute top-[88%] font-oswald text-2xl pl-20 text-white bg-black  w-[98%] opacity-80'><h1 className='p-1'>Ralph Edwards</h1></div>
               </div>

              <div className='relative'>
               <img style={{ width: "360px", height: "auto",  }}
               src="Images/gymWoman.jpg" alt="" />
               <div className='absolute top-[88%] font-oswald text-2xl pl-20 text-white bg-black  w-[98%] opacity-80'><h1 className='p-1'>Lila Flex</h1></div>
              </div>

              <div className='relative'>
               <img style={{ width: "350px", height: "auto" }}
               src="Images/image43.png" alt="" />
              <div className='absolute top-[87%] font-oswald text-2xl pl-20  text-white bg-black  w-[98%] opacity-80'><h1 className='p-1'>Liam Flexor</h1></div> 
              </div>

              <div className='relative'>
               <img style={{ width: "350px", height: "auto" }}
               src="Images/image42.png" alt="" />
              <div className='absolute top-[88%] font-oswald text-2xl pl-20 text-white bg-black  w-[98%] opacity-80'><h1 className='p-1'>Robert Wilson</h1></div> 
              </div>
               
               
               </div>
                  </Marquee>
            </div>

            <div className=' grid grid-cols-[15%_auto_35%] mt-14 w-[90%] ml-16 rounded-3xl bg-customBlack  pb-'>
              <div>
                <p className='text-[10px] ml-12 pt-8'>Don’t take our words</p>
                <h1 className='font-oswald font-bold pt-1 text-xl w-28 ml-12'>Listen from our Happy clients</h1>
              </div>

              <div className='w-[98%]  pt-8'>
                <div className='flex'>
              <span className='text-6xl '>"</span>
                <h1 className='text-2xl pt-1 pl-1 font-roboto'>“I have been a proud member of the incredible gym for over a year now, and the experience has been nothing short of amazing. The state of the equipment knowledgeable staff and diverse group classes have made my fitness journey not only effective but truly enjoyable”  </h1>
                </div>
                <div className='grid grid-cols-[8%_27%] pt-2 gap-1'>
                  <img className='w-14' src="Images/image44.png" alt="" />
                  <div className='pt-2'>
                  <h1 className='text-xl font-bold'>Philip Martins</h1>
                  <h1>Member</h1>
                  </div>
                </div>
              </div>

              <div className=''>
                <img className='rounded-br-3xl rounded-tr-3xl ' src="Images/image45.png" alt="" />
              </div>

            </div>

            <div className='relative mt-14  text-center bg-black'>
              <img  src="Images/image36.png"  alt="" />
              <div className='absolute top-4 ml-[35%] mt-12 '>
              <p className='text-3xl font-oswald font-bold shadow-black pb-2'>Join the Gymnastic <br />family</p>
              <h2 className='leading-tight pb-4'>Gym session or brick walk can help typical activity stem\loss <br /> many brain chemicals that may leave you  </h2>
              <button className='bg-customOrage rounded-full p-2 pl-3 pr-4'>BE A MEMBER</button>
              </div>
            </div>

       </div>  

       <Footer />

          
      
    </div>
  )
}

export default Home