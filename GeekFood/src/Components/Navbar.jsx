import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='navBar'>
            <div className='nav'>
                <a href="#" className='logo'>
                    <h1>
                        GeekFoods
                    </h1>
                </a>
                <ul className='navItems'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Quote</a></li>
                    <li><a href="#skills">Resturants</a></li>
                    <li><a href="#experience">Foods</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className='GetStarted-btn'>
                    Get Started
                </button>
            </div>
      </div>
    </>
  )
}

export default Navbar
