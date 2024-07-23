import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const List = [
  {
    url : '/',
    name: 'Home',
    icon : <FaHome />
  },
  {
    url : '/project',
    name: 'Projects',
    icon : <MdOutlineWorkOutline />
  },
  {
    url : '/services',
    name: 'Services',
    icon : <FaHome />
  },
  {
    url : '/contact',
    name: 'Contact',
    icon : <FaHome />
  },
]

const Sidebar = ({onClose}) => {
  const pathName = usePathname();
  return (
    <motion.div
    initial={{x: '-100%'}}
    animate={{x: 0}}
    transition={{duration: 0.2}}
    className='fixed z-40 top-[70px] left-0 w-full h-full  backdrop-blur-sm'>
      <div className='bg-white w-[250px] h-full'>
          <ul className='flex py-5 flex-col gap-2 px-3'>
            {List.map((item, index) => (
              <Link key={index}  onClick={onClose}  href={item.url}>
                <li className={`p-4 pl-6 flex items-center gap-2 rounded-md hover:bg-green-50 cursor-pointer ${pathName === item.url ? 'bg-green-700 text-white' : ' bg-green-50 '}`}>
                  {item.icon}
                  {item.name}</li>
              </Link>
            ))} 
           </ul>
      </div>
      sidebar      
    </motion.div>
  )
}

export default Sidebar
