import React, { useState } from 'react'
import logo from '../images/logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";


const Navbar = ()=>{
    const [menu, setMenu] = useState(false);
    const menuItem = [
        {
            id: 1,
            text : 'Home'
        },
        {
            id: 2,
            text : 'About',
        },
        {
            id: 3,
            text : 'Portfolio'
        },
        {
            id: 4,
            text : 'Experience'
        },
        {
            id: 5,
            text : 'Contact'
        }
    ]
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 top-0 sticky z-50 bg-white'>
            <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-2 px-10'>
                    <img src= {logo}alt="#" className='h-12 w-12 rounded-full'/>
                    <div>
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Dhruv <span className='text-green-500 text-2xl'>
                            Asati
                            </span>
                        </h1>
                        <p className='text-sm'>
                        Web Developer
                        </p>
                    </div>
                </div>
                <div>
                    <ul className='hidden md:flex space-x-8'>
                       {
                        menuItem.map(({id, text})=> 
                            <li className='flex items-center hover:scale-105 cursor-pointer' key={id}>
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >{text}</Link>
                               
                            </li>
                        )

                       }
                      
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                         {
                             menu?  <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>
                         }
                       </div>
                </div>
               
               
            </div>
            <div>
                 {/* Mobile view navbar */}
                <ul className='md:hidden flex flex-col justify-center text-center h-screen'>
                { menu &&
                       menuItem.map(({id, text})=> 
                            <li className='hover:scale-105 flex items-center py-3 text-2xl font-medium mx-auto cursor-pointer' key={id}>
                                 <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >{text}</Link>
                               
                            </li>
                        )

                       }
                       
                    </ul> 
                </div>
        </div>
        </>
    )
}

export default Navbar;