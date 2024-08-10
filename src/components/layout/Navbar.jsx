"use client"
import React from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
        <nav className=" fixed top-0 left-0 z-40 flex items-center justify-between flex-wrap bg-green-950 bg-opacity-75   w-full backdrop-blur-lg p-6">
            {/* for mobile */}
            <div className='flex h-full items-center gap-4 sm:hidden'>
                <div className='flex flex-col gap-1' onClick={()=>{setIsOpen(!isOpen)}}>
                    <div className={`bg-white w-5 h-[2px] ${isOpen ? " rotate-45  translate-y-[3px]  " : " rotate-0"} transition-all`}></div>
                    <div className={`bg-white w-5 h-[2px] ${isOpen ? " hidden " : " block"} transition-all`}></div>
                    <div className={`bg-white w-5 h-[2px] ${isOpen ? " -rotate-45 -translate-y-[2px] " : " rotate-0"} transition-all`}></div>
                </div>
               
                <div className="font-semibold text-lg text-gray-200 tracking-tight">RBM TECH</div>
            </div>


            {/* for large display */}
            <div className="max-w-[1100px] px-[50px] mx-auto hidden sm:flex justify-between items-center w-full text-white">
                <Link href={"/"} className="font-semibold text-xl tracking-tight">RBM TECH</Link>
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">

                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-white no-underline" href="/">Home</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/project">Projects</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="https://www.docsinhindi.com">Tutorial Web</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    </nav>    
                    {isOpen && <Sidebar onClose={()=>{setIsOpen(false)}}/>}  
    </div>

  )
}

export default Navbar
