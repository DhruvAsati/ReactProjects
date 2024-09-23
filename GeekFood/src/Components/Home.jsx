import React from 'react'
import Navbar from './Navbar'
import Touch from './Touch'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='hero'>
        <div className='heroImg'>
            <div className="hero-content">
            <h1>
              Let us find your <br/>
               <span>
                  Forever Food.
               </span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
             <div className='btn-all'>
             <button className='btn'>Search Now</button>
             <button className='btn-know'>Know More</button>
             </div>
            </div>

        </div>      
      </div>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Home
