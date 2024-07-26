"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { projectList } from '@/data/projectData';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai';

const ProjectPage = ({ params }) => {
  const { projectId } = params;
  const project = projectList.find((project) => project.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.screenShot.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.screenShot.length) % project.screenShot.length);
  };

  return (
    <div className="py-32 px-4 md:px-10 lg:px-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">{project.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-72 md:h-96"
          >
            <Image
              src={project.screenShot[currentImageIndex].image}
              alt={`Screenshot ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute text-[11px] top-0 right-0 bg-green-900 bg-opacity-50 text-white px-2 py-1 rounded-bl-lg  text-center">
              {project.screenShot[currentImageIndex].caption}
            </motion.div>
          </motion.div>
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Screenshots</h2>
          <div className="flex no-scrollbar sm:flex-wrap overflow-x-auto sm:overflow-hidden gap-4">
          {project.screenShot.map((screenshot, index) => (
              <div key={index} className="flex  min-w-[120px] min-h-[120px] flex-col items-center">
                <Image
                  src={screenshot.image}
                  alt={screenshot.caption}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover h-[100px] w-[100px] border cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                />
                <span className="text-gray-500 text-center text-sm mt-2">{screenshot.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mt-8 text-center max-w-3xl mx-auto">{project.description}</p>
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Skills Used</h3>
        <div className="flex justify-center flex-wrap gap-2 mt-2">
          {project.skill.map((skill, index) => (
            <span
              key={index}
              className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Supported Screens</h3>
        <div className="flex justify-center flex-wrap gap-2 mt-2">
          {project.screen.map((screenType, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {screenType}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800 transition-colors duration-300">
          <AiOutlineLink className="mr-2" /> Visit Live Site
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
