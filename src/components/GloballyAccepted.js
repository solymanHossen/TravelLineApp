import React from 'react';
import img1 from "../Asset/pngwing.png"
import "../Style/Global.css"

const GloballyAccepted = () => {
  return (
    <div className="globallyContainer">
      <div className="row mt-5">
        <div className="container col-md-6">

          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div className="content-overlay"></div>
              <img className="content-image" src={img1} />
              <div className="content-details fadeIn-bottom">
                <div className="domestic position-absolute  ">
                  <p className="domestic-p">For Domestic</p>
                  <div className="btn-demostic">
                    <p className='text-center mb-0 '> Start trip today</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="container col-md-6 ">

          <div class="content ">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div className="content-overlay "></div>
              <img className="content-image" src={img1} />
              <div className="content-details fadeIn-bottom">
                <div className="domestic position-absolute  ">
                  <p className="domestic-p">For Domestic</p>
                  <div className="btn-demostic">
                    <p className='text-center mb-0 '> Start trip today</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>



    </div>
  );
};

export default GloballyAccepted;