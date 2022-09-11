import React from 'react';
import pic1 from "../Asset/ourTeam.png"
import "../Style/OurTeam.css"
import { AiFillWindows } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"

const OurTeam = () => {
  return (
    <div className='promoContainer outrteam-bgc '>
      <div className="ourTeam-content text-center">
        <p className='title-all'>Our Team</p>
        <p className='w-70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="picture-content promo-grid">
        <img src={pic1} alt="" className='w-100' />

        <div className="ourTeam-content">
          <div className="watch-content">
            <p className='title-all'>Our team is the secret to our success</p>
          </div>
          <div className="p-content-ourTeam d-flex">
            <span><AiFillWindows className='icon-color'/></span><p className='p-content-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>

          <div className="p-content-ourTeam d-flex">
            <span><FaUserFriends className='icon-color' /></span><p className='p-content-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default OurTeam;