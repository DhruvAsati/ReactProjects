import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
   <>
     <div className="max-w-screen-2xl container  px-4 md:px-15 my-5 mx-0">
      
       <div className='flex justify-center items-center space-x-4 my-5 mt-3'>
         <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='text-4xl hover:-translate-y-3 hover:text-green-400'>
           <FaGithub />
         </a>
         <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='text-4xl hover:-translate-y-3 hover:text-green-400'>
           <FaSquareFacebook />
         </a>
         <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='text-4xl hover:-translate-y-3 hover:text-green-400'>
           <FaLinkedin />
         </a>
         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-4xl hover:-translate-y-3 hover:text-green-400'>
           <FaInstagramSquare />
         </a>
         <a href="https://t.me/joinchat/..." target="_blank" rel="noopener noreferrer" className='text-4xl hover:-translate-y-3 hover:text-green-400'>
           <FaTelegram />
         </a>
        
       </div>
        <hr className='border-2 border-black  w-1/5 mx-auto'  />
       <p className='text-center py-2'> &copy; 2024 MyPortfolio. All rights reserved.</p>
       <p className='text-center py-2'>
         Designed and developed by <a href='https://github.com/dhruv-asati' target='_blank' rel="noopener noreferrer" className='font-bold text-xl'>Dhruv Asati</a>.
       </p>
    </div>
   </>
  )
}

export default Footer
