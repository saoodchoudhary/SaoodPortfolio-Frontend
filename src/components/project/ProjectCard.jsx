"use client"
import Image from 'next/image'
import React, { useEffect,  useState } from 'react'
import { motion } from 'framer-motion';
import  {projectList}  from '@/data/projectData';
import Link from 'next/link';


const ProjectCard = () => {
    const [showMore, setShowMore] = useState(Array(projectList.length).fill(false));  

    const toggleShowMore = (index) => {
        setShowMore(prevShowMore => {
            const newShowMore = [...prevShowMore];
            newShowMore[index] = !newShowMore[index];
            return newShowMore;
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div  className='justify-items-center  flex flex-wrap justify-center gap-7'>
            {projectList.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0 , y: 50 }}
                    animate={{ opacity: 1 , y: 0 }}
                    transition={{ delay: 0.1 * index , duration: 0.5 }}
                    key={index} className="border max-w-[300px] hover-Effect hover:shadow-lg hover:shadow-green-100 transition-shadow cursor-pointer  rounded-lg p-2">
                    <Link  href={`/project/${item.id}`} className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <span className="bg-yellow-50 min-w-fit text-yellow-700 px-3 py-1 rounded-full text-[11px]">{item.category}</span>
                            <span className="bg-green-50 min-w-fit text-green-800 px-3 py-1 rounded-full text-[11px]">{item.subCategory}</span>
                        </div>
                        <div className="self-center">
                            <Image src={item.image} alt={item.name} width={300} height={100} className="rounded-md border h-[200px] effect-image object-cover" />
                        </div>
                        <h2 className="text-md font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.description.substring(0, 50)}...</p>
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-2 flex-wrap ">
                                {item.skill.slice(0, showMore[index] ? item.skill.length : 2).map((skill, i) => (
                                    <span key={i} className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-[11px]">{skill}</span>
                                ))}
                            </div>
                            {item.skill.length > 2 && (
                                <button
                                    // onClick={() => toggleShowMore(index)}
                                    className="text-gray-500 min-w-fit  rounded-full text-[11px] px-2 py-1"
                                >
                                    {showMore[index] ? 'Show Less' : '...'}
                                </button>
                            )}
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectCard;