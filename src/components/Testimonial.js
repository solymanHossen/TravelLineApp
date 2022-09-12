import React from 'react';
import img1 from "../Asset/Testimonial.png"
import "../Style/Testimonial.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Testimonial = () => {
  return (
    <div className="promoContainer testimonial-grid mt-5">
      <div className="content-testimonial text-left">
        <p className='' testimonial-head> <span className='testimonial-border'></span> TESTIMONIAL</p>
        <p className='testimonial-title'>What Customers Say?</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the</p>
        <div className="writ-thouth mt-2">
          <p className='thought'>Write your thought<HiOutlineArrowNarrowRight className='arrow-icon' /></p>
        </div>
      </div>
      <div className="watch-img">
        <img src={img1} alt="" className='img-testimonial' />
      </div>
    </div>
  );
};

export default Testimonial;