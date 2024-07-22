"use client"
// components/Hero.js
import { motion } from 'framer-motion';
import { MdOutlineWorkOutline } from "react-icons/md";

export default function Hero() {
  return (
    <div className=" bg-gradient-to-br from-green-900 to-gray-950">     

     <div className="relative mx-auto max-w-[1200px] flex flex-col-reverse gap-10 md:flex-row items-center justify-center py-[160px] sm:py-[250px] overflow-hidden">
     <motion.div
        className="absolute top-[20%] left-[40%] w-24 h-24 blur-[2px] rounded-full opacity-20 z-0"
        initial={{ backgroundColor: "#355E3B" }}
        animate={{ backgroundColor: ["#355E3B", "#4F7942", "#009E60", "#40826D"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    
     <motion.div
        className="absolute bottom-[20%] right-[0%] w-10 h-10 blur-[2px] rounded-full opacity-10  z-0"
        initial={{ backgroundColor: "#355E3B" }}
        animate={{ backgroundColor: ["#355E3B", "#4F7942", "#009E60", "#40826D"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Text Content */}
      <div className="relative z-10 text-center md:text-left md:w-1/2 space-y-10">
        <h1 className="text-4xl font-bold text-white">
            <span className='text-5xl inline-block text-blue-200'>Hey...</span>
                <span className='block mt-4'>I'm Saood Ahmad</span>
        </h1>
        <p className="text-xl text-gray-200">
          I'm a Full Stack Web Developer specializing in MERN stack and Next.js. I build robust and scalable web applications.
        </p>

        {/* CTA Button and Hire me Button*/}
        <div className="flex justify-center md:justify-start space-x-4">
            <a
            href="#projects"
            className="bg-white text-green-600 px-6 py-2 flex items-center justify-center rounded-full font-semibold hover:text-green-800  transition-colors duration-500"
            >
                <MdOutlineWorkOutline className="w-6 h-6 self-center mr-2" />
            View Projects
            </a>
            <a
            href="#contact"
            className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition-colors duration-500"
            >
            Hire Me
            </a>
        </div>            

      </div>

      {/* Profile Image and Dashed Circle */}
      <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <motion.div
          animate={{ rotate: [0, 360, 0, -360, 0] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 md:w-[490px] md:h-[490px] rounded-full flex justify-center items-center"
        >
          <svg className="w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="35%"
              fill="none"
              stroke="#C0C0C0"
              strokeWidth="2"
              strokeDasharray="10 20 30 10"
            />
          </svg>
        </motion.div>
        <img
          src="/images/saood-min2.png" // replace with your profile image path
          alt="Profile"
          className="w-44 h-44 md:w-[300px] md:h-[300px] shadow-sm  rounded-full object-cover"
        />
         <motion.div
        className="absolute top-[0] translate-y-[-40%] sm:translate-y-[-70%] translate-x-[-20%] left-[0]"
        initial={{ 
          scale: 0,
          translateX: "0%",
          translateY: "0%"

        }}
        animate={{ 
          scale : [0, 1.2, 1],
          translateX: "-30%",
          translateY: "-30%"
         }}
        transition={{ duration: 0.5,  }}
       
      >
        <div className="relative max-w-[180px] flex justify-center items-center translate-x-[10%] sm:translate-x-[0px] translate-y-[-100%] sm:translate-y-[0px] bg-green-100 rounded-md px-3 py-2 shadow-sm shadow-gray-400 ">
          <div className=' font-medium text-green-800 text-center'>
            Thank You for visiting my website
          </div>
          <div className="absolute block sm:hidden bottom-0 left-0 translate-y-[30%] w-0 h-0 border-l-[40px] border-l-transparent border-t-[20px] border-t-green-100 rounded-sm rotate-[10deg] z-0"></div>
          <div className="absolute hidden sm:block bottom-0 translate-x-[60%] right-0 w-0 h-0 border-l-transparent border-r-[30px]  border-r-transparent border-b-[20px] border-b-green-100 rounded-sm rotate-[20deg] z-0 "></div>
        </div>
      </motion.div>
      </div>
      </div>
    </div>
  );
}

