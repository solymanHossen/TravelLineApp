import React from 'react';
import img1 from "../Asset/news-resourse (4).png"
import img2 from "../Asset/Rectangle 33.png"
import "../Style/LeatestNews.css"


import "../Style/LeatestNews.css"
const LastestNews = () => {
  return (
    <div className="promoContainer leatest-container-main">

      <div className="leatest-news-mainContent text-center">
        <p className='title-all'>Lastest News and Resources</p>
        <p className='leatest-news-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="img-seciont-cl-container">
        <div className="leatestimg-section">
          <img src={img1} className="img1-l" alt="" />
          <button className='news-btn'>News</button>
          <p className='com-form mb-2 mt-1'>Where does it come from?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque. Eveniet quis, odio a asperiores laborum qui atque at eum consectetur deleniti quia.</p>

          <a href="">read more</a>
        </div>
        {/* section 2nd */}

        <div className="row ">
          <div className="leatest-content">
            <div className="lmg-content">

              <img src={img2} alt="cardimg" className='cardimg' />
              <button className='news-btn-main-content'>PRESS RELEASE</button>

            </div>
            <div className="news-card-content">
              <p className='p-content-card'>Where does it come from?
              </p>
              <p className='country-popular-p'>Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.</p>
            </div>
          </div>
          <div className="leatest-content">
            <div className="lmg-content">

              <img src={img2} alt="cardimg" className='cardimg' />
              <button className='news-btn2'>News</button>

            </div>
            <div className="news-card-content">
              <p className='p-content-card'>Where does it come from?
              </p>
              <p className='country-popular-p'>Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.</p>
            </div>
          </div>
          <div className="leatest-content">
            <div className="lmg-content">

              <img src={img2} alt="cardimg" className='cardimg' />
              <button className='news-btn2'>News</button>

            </div>
            <div className="news-card-content">
              <p className='p-content-card'>Where does it come from?
              </p>
              <p className='country-popular-p'>Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.</p>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default LastestNews;