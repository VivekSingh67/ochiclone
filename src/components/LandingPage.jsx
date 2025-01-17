import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-20">
        {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="master" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw] w-[8vw] h-[5.7vw]  relative top-[0.7vw]">
                  <img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1 className='pt-[2vw]  uppercase text-[7vw] leading-[5vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zice-800 mt-24 flex justify-between items-center py-3 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md capitalize rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
