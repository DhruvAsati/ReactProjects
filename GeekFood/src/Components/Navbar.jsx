import React from 'react';

const NavBar = ({ setCurrentPage }) => {
  return (
    <>
      <div className='navBar'>
        <div className='nav'>
          <div className="logoSec">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
            <h1>GeekFoods</h1>
          </div>
          <ul className='navItems'>
            <li id='homeLink'><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
            <li><a href="#quote" onClick={() => setCurrentPage('quote')}>Quote</a></li>
            <li><a href="#restaurants" onClick={() => setCurrentPage('restaurants')}>Restaurants</a></li>
            <li><a href="#foods" onClick={() => setCurrentPage('foods')}>Foods</a></li>
            <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a></li>
          </ul>
          <button className='GetStarted-btn'>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
