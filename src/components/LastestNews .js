import React from 'react';
import img1 from "../Asset/news-resourse (4).png"
import img2 from "../Asset/news-resourse (2).png"

import "../Style/LeatestNews.css"
const LastestNews = () => {
  return (
    <div className="container leatest-container-main">

      <div className="leatest-news-mainContent text-center">
        <p className='title-all'>Lastest News and Resources</p>
        <p className='leatest-news-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="img-seciont-cl-container">
      <div className="leatestimg-section">
        <img src={img1} className="img1-l" alt="" />
        <button className='news-btn'>News</button>
        <p className='com-form'>Where does it come from?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, itaque. Eveniet quis, odio a asperiores laborum qui atque at eum consectetur deleniti quia.</p>
        {/* <p>Travelline
          Home
          Events
          About
          Blog
          Contact
          +1 (000) 000 000
          Life is a journey, not a destination
          250k
          Plan Your Trip
          Let’s start your journey with us, your dream will come true...
          Explore Destinations
          Watch how it works
          Upcoming Trips
          Today at 12.00 PM
          Join Now
          Check Our Best Promotional Tour
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Beijing
          Turkey
          Pakistan
          Globally Accepted
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          For Domestic
          For International
          Start trip today
          Start trip today
          Watch, our lattest tour
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Learn more
          Our Team
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Our team is the secret to our success
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Why Choose Us
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          Handpicked Hotels
          World Class Service
          Best Price Guarantee
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          TESTIMONIAL
          What Customers Say?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the
          Write your thought
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Kyiloria Danu
          12 reviews
          Lastest News and Resources
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Where does it come from?

          PRESS RELEASE
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Where does it come from?

          NEWS
          NEWS
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Where does it come from?

          Read more
          NEWS
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Travelline
          Domestic International Tours
          Subscribe to get our Newsletter
          Your Email
          Subscribe
          Careers
          Privacy Policy
          Terms & Conditions
          © 2021 Tourism Department. </p> */}
        <a href="">read more</a>
      </div>
      <div className="row ">
        <div className="leatest-content">
          <div className="lmg-content">
          
              <img src={img2} alt="cardimg"className='cardimg' />
              <button className='news-btn2'>PRESS RELEASE</button>
           
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
          
              <img src={img2} alt="cardimg"className='cardimg' />
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
          
              <img src={img2} alt="cardimg"className='cardimg' />
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