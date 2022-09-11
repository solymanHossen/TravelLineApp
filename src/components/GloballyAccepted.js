import React from 'react';
import img1 from "../Asset/p1 (2).png"
import "../Style/Global.css"

const GloballyAccepted = () => {
  return (
    <div className="globallyContainer">
      <div className="golobalContent text-center">
        <p className="title-all"><span className="g-color"> Globally</span> <span className="g-color2"> Accepted</span>
        </p>
        <p className='golobal-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="row mt-5 ">
        <div className="card position-relative border-0 col-md-6">
          <img src={img1} alt="" className='opacity-25' />
          <div className="domestic position-absolute  ">
            <p className="domestic-p">For Domestic</p>
            <div className="btn-demostic">
              <p className='text-center mb-0 '> Start trip today</p>
            </div>
          </div>
        </div>
        <div className="card position-relative border-0 col-md-6">
          <img src={img1} alt="" className='opacity-25' />
          <div className="domestic position-absolute  ">
            <p className="domestic-p">For Domestic</p>
            <div className="btn-demostic">
              <p className='text-center mb-0 '> Start trip today</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default GloballyAccepted;