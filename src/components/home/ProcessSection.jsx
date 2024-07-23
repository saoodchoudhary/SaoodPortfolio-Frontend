"use client"
import React from 'react'

// components/Process.js
import { FaLaptopCode, FaPaintBrush, FaCogs } from 'react-icons/fa';
import { motion, inView  } from 'framer-motion';

const steps = [
  {
    id: 1,
    icon: <FaLaptopCode size={32} />,
    title: 'Step 1: Planning',
    description: 'Identify requirements, create wireframes, and set project milestones.',
  },
  {
    id: 2,
    icon: <FaPaintBrush size={32} />,
    title: 'Step 2: Design',
    description: 'Create visual designs, choose color schemes, and design UI/UX elements.',
  },
  {
    id: 3,
    icon: <FaCogs size={32} />,
    title: 'Step 3: Development',
    description: 'Write code, develop features, and integrate with backend systems.',
  },
];

export default function ProcessSection() {
  return (
      <div className="min-h-screen flex flex-col items-center  p-8">
     
    <div className="relative flex flex-col items-center p-8  rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-green-800">Process</h2>
      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-400"></div>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex relative items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start -ml-8' : 'justify-end ml-8'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className={`absolute ${(index % 2 === 0) ? "right-[50%] translate-x-[100%]" : " left-[50%]  translate-x-[-100%]"} w-8 h-[2px] bg-gray-400 rounded-full`}></div>
            <div className="flex items-center justify-center w-1/2">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                {index % 2 === 1 && (
                  <div className="text-blue-500">{step.icon}</div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index % 2 === 0 && (
                  <div className="text-blue-500">{step.icon}</div>
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
