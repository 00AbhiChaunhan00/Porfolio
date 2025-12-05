import React from 'react'
import { FaInstagram,FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
  <footer  className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
    <div  className="container mx-auto text-center">
      <h2  className="text-xl font-semibold text-purple-500">Abhishek Singh Chauhan</h2>
      <div className="flex flex-wrap justify-center space-x-4 mt-6">
        <a
              href='https://www.instagram.com/004bhichauhan00/'
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
             <FaInstagram/> 
            </a>
             <a
              href='https://www.linkedin.com/in/00abhichauhan00/'
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
             <CiLinkedin/> 
            </a>
             <a
              href='https://wa.me/917217645866'
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
            <FaWhatsapp />
            </a>
            <a
              href='https://github.com/00AbhiChaunhan00'
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
            <FaGithub />
            </a>
             <a
              href='https://x.com/00AbhiChauhan00'
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
            <FaXTwitter/>
            </a>
      </div>
       <p className="text-sm text-gray-400 mt-6">
    © 2025 Abhishek Singh Chauhan. All rights reserved.
        </p>
    </div>
  </footer>
  )
}

export default Footer
