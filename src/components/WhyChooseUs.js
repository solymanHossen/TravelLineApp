import React from 'react';
import "../Style/WhayChooseus.css"
import {AiOutlineStar} from "react-icons/ai"

const WhyChooseUs = () => {
  return (
    <div className="container chooseus-bgc">
       <div className="choose-content text-center">
        <p className='title-all'>Why Choose Us</p>
        <p className='choose-us-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>

<div class="row row-cols-1 row-cols-md-3 g-4 mt-5 pb-4">

<div class="col card1">
  <div ><AiOutlineStar className="star-icon"/></div>
    <div class="card  border-0">
    <div className="card-title ">
            <p className='card-title-p'>Handpicked Hotels</p>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          </div>
    </div>
  </div>
<div class="col card1  ">
    <div class="card  border-0">
    <div className="card-title ">
            <p className='card-title-p'>Handpicked Hotels</p>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          </div>
    </div>
  </div>
<div class="col card1">
    <div class="card  border-0">
    <div className="card-title ">
            <p className='card-title-p'>Handpicked Hotels</p>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default WhyChooseUs;