import React from 'react'
import Touch from './Touch'

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home
