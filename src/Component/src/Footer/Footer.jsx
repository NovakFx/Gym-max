import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <footer className='text-white pt-20 bg-customdarkBlue h-auto pb-5 pl-14'>
            <div>

                <div className='grid grid-cols-5  pt-28'>
                  <div>
                    <img src="Images/GYM.png"  alt="" />
                    <p className='pt-6 text-[12px]'>Gym session or brief walk, can help physical activity stimulates making chemicals that may leave you.</p>
                    <h1 className='mt-32 text-xs font-bold'>@2024 All Rights Reserved</h1>
                  </div>
                  <div className='pl-14'>
                    <h1 className='text-xl font-bold'>Company</h1>

                    <p className='text-[12px] pt-5 pb-2'>Name</p>
                    <p className='text-[12px]  pb-2'>Class</p>
                    <p className='text-[12px]  pb-2'>Trainers</p>
                    <p className='text-[12px]  pb-2'>Compact</p>
                  </div>

                  <div>
                    <h1 className='text-xl font-bold'>Category</h1>

                    <p className='text-[12px] pt-5 pb-2'>Strenght</p>
                    <p className='text-[12px]  pb-2'>Body Building</p>
                    <p className='text-[12px]  pb-2'>Weight Loss</p>
                    <p className='text-[12px]  pb-2'>Basic Yoga</p>
                  </div>

                  <div>
                    <h1 className='text-xl font-bold'>Contact Us</h1>

                    <p className='text-[12px] pt-5 pb-2'><CallIcon 
                    style={{
                      fontSize:'18px',
                    }}
                    /> +1248 630 7234</p>
                    <p className='text-[12px]  pb-2'><EmailIcon 
                    style={{
                      fontSize:'18px',
                      marginRight:'5px'
                    }}
                    />Gyminfodomain.com</p>
                    <p className='text-[12px]  pb-2'><LocationOnIcon 
                    style={{
                      fontSize:'18px',
                      marginRight:'5px'
                    }}
                    />warehouse wallstreet. ali overose 3, dublin</p>
                  </div>

                  <div>
                    <h1 className='text-xl font-bold'>Support</h1>

                    <p className='text-[12px] pt-5 pb-2'>FAQ</p>
                    <p className='text-[12px]  pb-2'>Help</p>
                    <p className='text-[12px]  pb-2'>Privacy Policy</p>
                    <p className='text-[12px]  pb-2'>Contact</p>
                  </div>

                </div>

            </div>
       </footer>
  )
}

export default Footer