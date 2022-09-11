import React from 'react';
import media from "../Asset/media.png"
import heroimg from "../Asset/Hero.png"
import "../Style/Hero.css"

const Hero = () => {
  return (
    <div className="navBGC">
    <div className="navContainer navContainer-hero">
      <div className="content-hero">
      <div>
       <p className='title-all'><span className='font-color'> Life is a journey</span>, not a destination</p>
       <p className='mt-3 w-50'>Let’s start your journey with us, your dream will come true...</p>
      </div>
      <div className="epolore-button">
        <button className='explore-btn'>Explore Destinations</button>
       <img src={media} alt="media" /><span>Watch how it works</span></div>
      
    </div>
    
      <img src={heroimg} alt="heroimg" className='heroimg' />
   


    </div>
    </div>
  );
};

export default Hero;