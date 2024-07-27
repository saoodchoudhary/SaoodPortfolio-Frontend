"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-green-800 to-gray-800 text-gray-100 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/"
            className="text-2xl font-semibold mb-4 md:mb-0"
          >
            Saood Ahmad
          </Link>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                href="/project"
                  className="hover:text-white transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <ul className="flex space-x-4">
                {/*  <li>
             <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </motion.a>
              </li> */}
              <li>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/saood-choudhary-0a9677218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/saoodchoudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
