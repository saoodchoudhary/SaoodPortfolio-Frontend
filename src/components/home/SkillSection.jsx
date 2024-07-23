"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaServer, FaCloud } from 'react-icons/fa'

const Skills = [
  {
    id: "frontend-development",
    name: 'Frontend Development',
    skills: [
      {
        name: 'React.js',
        icon: <FaReact />
      },
      {
        name: 'Next.js',
        icon: <FaReact />
      },
      {
        name: 'Redux',
        icon: <FaReact />
      },
      {
        name: 'Context API',
        icon: <FaReact />
      },
      {
        name: 'Tailwind CSS',
        icon: <FaReact />
      },
      {
        name: 'Bootstrap',
        icon: <FaReact />
      },
      {
        name: 'Material UI',
        icon: <FaReact />
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
        icon: <FaNodeJs />
      },
      {
        name: 'Express.js',
        icon: <FaNodeJs />
      },
      {
        name: 'MongoDB',
        icon: <FaDatabase />
      },
      {
        name: 'Firebase',
        icon: <FaDatabase />
      },
      {
        name: 'REST API',
        icon: <FaServer />
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
        icon: <FaTools />
      },
      {
        name: 'GitHub',
        icon: <FaTools />
      },
      {
        name: 'VS Code',
        icon: <FaTools />
      },
      {
        name: 'Postman',
        icon: <FaTools />
      },
      {
        name: 'Heroku',
        icon: <FaCloud />
      },
      {
        name: 'Netlify',
        icon: <FaCloud />
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
        icon: <FaCloud />
      },
      {
        name: 'Netlify',
        icon: <FaCloud />
      },
      {
        name: 'Vercel',
        icon: <FaCloud />
      },
      {
        name: 'GitHub Pages',
        icon: <FaCloud />
      },
      {
        name: 'AWS',
        icon: <FaCloud />
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
        icon: <FaReact />
      },
      {
        name: 'Cross Browser Testing',
        icon: <FaReact />
      },
      {
        name: 'SEO',
        icon: <FaReact />
      },
      {
        name: 'Web Performance',
        icon: <FaReact />
      },
      {
        name: 'Accessibility',
        icon: <FaReact />
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
        <div className='py-[50px] px-[20px]'>
          <h2 className='text-2xl font-semibold text-green-900 text-center  pb-10'>Skills</h2>
          <div className='flex flex-col gap-5'>
            {Skills.map(skill => (             
                <button key={skill.id}  onClick={()=>setHashName(skill.id)} className={`text-lg  border  rounded px-8 py-2 max-w-[290px]  font-medium ${(skill.id === hashName) ? " bg-green-700 text-white " : " bg-white border-green-700 text-green-700"}`}>{skill.name}</button>                
             
            ))}

          </div>

        </div>
        <div className='py-[50px] flex-1  pr-[20px] pl-[50px]'>
        <h2 className='text-2xl font-semibold  text-green-900 pb-10'>{activeSkills.name}</h2>
        <div className='flex flex-wrap justify-start gap-10'>
          {activeSkills.skills.map(subSkill => (
            <div key={subSkill.name} className=' inline-flex w-[120px] h-[110px] rounded-sm shadow-sm shadow-green-200 px-1 flex-col items-center justify-center gap-2 bg-green-50 border border-gray-100'>
             <div className='text-green-700'>  {subSkill.icon} </div>
              <div className='text-center text-sm'>{subSkill.name}</div>
            </div>
          ))}
                    
        </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
