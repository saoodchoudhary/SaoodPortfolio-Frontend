"use client"
import React from 'react'

// components/Process.js
import { FaRegClipboard, FaLaptopCode,  FaRocket, FaPaintBrush, FaWrench } from 'react-icons/fa';

import { motion, inView  } from 'framer-motion';

const steps = [
  {
    title: "1. Planning",
    description: "Creating a roadmap, including wireframes, mood boards, and timelines.",
    icon: <FaRegClipboard size={30} />,
  },
  {
    title: "2. Design",
    description: "Developing design concepts and prototypes for client feedback.",
    icon: <FaPaintBrush size={30} />,
  },
  {
    title: "3. Development",
    description: "Coding and optimizing the project for performance and functionality.",
    icon: <FaLaptopCode size={30} />,
  },
  {
    title: "4. Launch",
    description: "Delivering the final product and ensuring a smooth launch.",
    icon: <FaRocket size={30} />,
  },
  {
    title: "5. Maintenance",
    description: "Providing ongoing maintenance and updates for long-term success.",
    icon: <FaWrench size={30} />,
  },
];

export default function ProcessSection() {
  return (
      <div className="flex flex-col items-center  p-8">
     
    <div className="relative flex flex-col items-center p-8  rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-green-700">Process</h2>
      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-400"></div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex relative mt-6 items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start -ml-8' : 'justify-end ml-8'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className={`absolute ${(index % 2 === 0) ? "right-[50%] translate-x-[100%]" : " left-[50%]  translate-x-[-100%]"} w-8 h-[2px] hidden sm:block bg-gray-400 rounded-full`}></div>
            <div className="flex items-center justify-center sm:w-1/2">
              <div className={`flex ${(index % 2 !== 0) ? " flex-col " : "  flex-col-reverse "} sm:flex-row items-center space-x-4 bg-white p-4 rounded-lg shadow-md`}>
                {index % 2 === 1 && (
                  <div className="text-green-500">{step.icon}</div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index % 2 === 0 && (
                  <div className="text-green-500">{step.icon}</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
}
