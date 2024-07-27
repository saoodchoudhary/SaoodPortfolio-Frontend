"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaServer, FaCloud, FaAws  } from 'react-icons/fa'
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { BiLogoHeroku } from "react-icons/bi";
import { SiNetlify , SiVercel, SiMongodb  } from "react-icons/si";

const Skills = [
  {
    id: "frontend-development",
    name: 'Frontend Development',
    skills: [
      {
        name: 'React.js',
        icon: 'react-js.svg'
      },
      {
        name: 'Next.js',
        icon: 'next-js.svg'
      },
      {
        name: 'Redux',
        icon: 'redux.svg'
      },
      {
        name: 'Context API',
        icon: 'react-js.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind-css.svg'
      },
      {
        name: 'Bootstrap',
        icon: 'bootstrap.svg'
      },
      {
        name: 'Material UI',
        icon: 'material-ui.svg'
      },
    ]
  },
  {
    id: "backend-development",
    name: 'Backend Development',
    // skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST API', 'GraphQL']
    skills: [
      {
        name: 'Node.js',
        icon: 'node-js.svg'
      },
      {
        name: 'Express.js',
        icon: 'express-js.svg'
      },
      {
        name: 'MongoDB',
        icon: 'mongodb.svg'
      },
      {
        name: 'REST API',
        icon: 'rest-api.svg'
      },
    ]
  },
  {
    id:"tools",
    name: 'Tools',
    // skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Heroku', 'Netlify']
    skills: [
      {
        name: 'Git',
        icon: 'git.svg'
      },
      {
        name: 'GitHub',
        icon: 'github.svg'
      },
      {
        name: 'VS Code',
        icon: 'vs-code.svg'
      },
      {
        name: 'Postman',
        icon: 'postman.svg'
      },
      {
        name: 'Heroku',
        icon: 'heroku.svg'
      },
      {
        name: 'Netlify',
        icon: 'netlify.svg'
      }
    ]
  },
  {
    id: "deployment",
    name: 'Deployment',
    // skills: ['Heroku', 'Netlify', 'Vercel', 'GitHub Pages', 'Firebase Hosting', 'AWS']
    skills:[
      {
        name: 'Heroku',
        icon: 'heroku.svg'
      },
      {
        name: 'Netlify',
        icon: 'netlify.svg'
      },
      {
        name: 'Vercel',
        icon: 'vercel.svg'
      },
      {
        name: 'GitHub Pages',
        icon: 'github.svg'
      },
      {
        name: 'AWS',
        icon: 'aws.svg'
      }
    ]
  },
  {
    id: "others",
    name: 'Others',
    // skills: ['Responsive Design', 'Cross Browser Testing', 'SEO', 'Web Performance', 'Accessibility']
    skills:[
      {
        name: 'Responsive Design',
        icon: 'responsive-design.svg'
      },
      {
        name: 'Cross Browser Testing',
        icon: 'test.svg'
      },
      {
        name: 'SEO',
        icon: 'seo.svg'
      },
      {
        name: 'Web Performance',
        icon: 'speed.svg'
      },
      {
        name: 'Accessibility',
        icon: 'accessibility.svg'
      }
    ]

  }

]
const SkillSection = () => {
  const [activeSkills, setActiveSkills] = useState(Skills[0]);
  const [hashName, setHashName] = useState(Skills[0].id);


  useEffect(() => {
    if (hashName){
    console.log(hashName)
      const skill = Skills.find(skill => skill.id === hashName)
      console.log(skill)
      if (skill){
        setActiveSkills(skill);
      } else {
        setActiveSkills(Skills[0]);
      }
    } 

  }, [hashName]);

  return (
    <div className='  px-[50] '>
      <div className='container max-w-[1100px] mx-auto flex flex-col sm:flex-row'>
        {/* desktop */}
        <div className='hidden sm:block py-[20px] sm:py-[50px] px-[20px]'>
          <h2 className='text-2xl font-semibold text-green-900 text-center  pb-10'>Skills</h2>
          <div className='flex items-center flex-col gap-5'>
            {Skills.map(skill => (             
                <button key={skill.id}  onClick={()=>setHashName(skill.id)} className={`text-lg w-full rounded px-8 py-2 max-w-[290px]  font-medium ${(skill.id === hashName) ? " bg-green-700 text-white " : " bg-green-50  text-green-700"}`}>{skill.name}</button>                
             
            ))}

          </div>

        </div>
          {/* for mobile */}
          <div className='block sm:hidden pt-[20px] px-[20px]'>
          <h2 className='text-2xl font-semibold pb-3 text-green-900'>Skills</h2>
          <div className='flex no-scrollbar items-center gap-5 overflow-y-auto'>
            {Skills.map(skill => (             
                <button key={skill.id}  onClick={()=>setHashName(skill.id)} className={`text-lg w-full rounded px-8 py-2 min-w-fit  font-medium ${(skill.id === hashName) ? " bg-green-700 text-white " : " bg-green-50  text-green-700"}`}>{skill.name}</button>           
             
            ))}

            </div>
            {/* div point and automatic to other */}
            <div className='flex gap-3 justify-center pt-6'>
            {Skills.map(skill => (
              <div key={skill.id} className={`w-2 h-2 rounded-full  ${(skill.id === hashName) ? " bg-green-700 " : "bg-gray-400 "}`}></div>
            ))}
            </div>
            </div>

        <div className='py-6 sm:py-[50px] sm:flex-1   sm:pr-[20px] sm:pl-[50px]'>
        <h2 className='text-2xl font-semibold  text-green-900 pb-10 px-5 sm:px-0'>{activeSkills.name}</h2>
        <motion.div
        // add animation when hashName changes 
        key={hashName}
        initial={{ opacity: 0 , y: 50}}
        animate={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}


            
        className='flex flex-wrap justify-center sm:justify-start gap-10'>
          {activeSkills.skills.map(subSkill => (
            <div key={subSkill.name} className=' inline-flex w-[120px] h-[110px] rounded-sm shadow-sm shadow-green-200 px-1 flex-col items-center justify-center gap-2 bg-green-50 border border-gray-100'>
             <img src={`/icons/${subSkill.icon}`} alt={subSkill.name} className='text-green-700 w-[26px] h-[26px]' /> 
              <div className='text-center text-sm'>{subSkill.name}</div>
            </div>
          ))}
                    
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
