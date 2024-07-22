import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=" fixed top-0 left-0 z-40 flex items-center justify-between flex-wrap bg-green-950 bg-opacity-75   w-full backdrop-blur-lg p-6">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Saood Ahmad</span>
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">

                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="#">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">About</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Services</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                    </nav>

      
    </div>
  )
}

export default Navbar
