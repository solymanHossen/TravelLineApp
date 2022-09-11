import React from 'react';
import "../Style/Watch.css"
 import img1 from "../Asset/media.png"
 import img2 from "../Asset/Mask Group (1).png"
const Watch = () => {
  return (
   <div className="promoContainer watch-container">
    <div className="watch-content">
    <p className='watch-heading'>Watch, our lattest tour</p>
    <p className='watching-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    
    <a href="">Learn more</a>
    </div>
  <div className="watch-pic position-relative">
    <img src={img2} alt="img" className='watch-img' />
    <img src={img1} alt="img" className='media-img' />
  </div>


   </div>
  );
};

export default Watch;