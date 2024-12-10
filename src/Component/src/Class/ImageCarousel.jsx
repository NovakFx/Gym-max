import React from "react";
import { motion } from "framer-motion";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Opacity } from "@mui/icons-material";

const ImageCarousel = () => {
  const data = [
    {
      img: `Images/image1.png`,
      time:`20-40mins`,
      day: `14 days`,
      year:`2024 Gets Abs Challenge`,
    },
    
    {
      img: `Images/image1.png`,
      time:`20-40mins`,
      day: `14 days`,
      year:`2024 Gets Abs Challenge`,
    },
    
    {
      img: `Images/image1.png`,
      time:`20-40mins`,
      day: `14 days`,
      year:`2024 Gets Abs Challenge`,
    },
    {
      img: `Images/image1.png`,
      time:`20-40mins`,
      day: `14 days`,
      year:`2024 Gets Abs Challenge`,
    },
    {
      img: `Images/image1.png`,
      time:`20-40mins`,
      day: `14 days`,
      year:`2024 Gets Abs Challenge`,
    },

  ]

  return (
    <div>
      <div className="mt-3 ">
        {data.map((d)=>(
          <div className="bg-blue-800 ">
            <div className=" relative ">
              <img src={d.img} alt="" className="rounded-3xl  w-[20%]"/>
              <div className="absolute top-72 rounded-2xl bg-slate-600 p-2 pb-3 pt-3 ml-8">
              <div className="flex gap-7 text-sm text-black">
              <p className="bg-yellow-300 p-1 pl-2 pr-2  rounded-2xl"><CalendarMonthIcon  style={{
                fontSize:'20px'
              }}/>{d.day}</p>  
              <motion.p 
              // initial={{opacity: 0, y: -700}}
              // animate={{opacity: 1, y: -0}}
              // transition={{duration: 1, ease: "easeOut"}}
              whileInView={{opacity: 30, y:10}}
              
              className="bg-yellow-300 p-1 pl-2 pr-2  rounded-2xl"><ScheduleIcon style={{
                fontSize:'20px'
              }}/>{d.time}</motion.p>
              </div>
              <p className="pt-2">{d.year}</p>
              </div>

            </div> 

           
          </div>  
        ))}

      </div>
    </div>
  );
};

export default ImageCarousel;
