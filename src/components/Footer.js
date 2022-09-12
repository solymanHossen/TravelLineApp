import React from 'react';
import logo from "../Asset/logo.png"
import "../Style/Footer.css"
const Footer = () => {
  return (
   <div className="footerContainer  text-center footer-bgc mt-5">

   <div className="logo-content-footer">
    <img src={logo} alt="logo" />
    <p>Domestic International Tours</p>
   </div>
   <div className="subcribe-footer">
    <p className='footer-subcribe-text'>Subscribe to get our Newsletter</p>
     <div className="interEmail-form">
     <input type="text" placeholder='Your Email' className='input-btn' />
      <button className='btn-sub'>subscribe</button>
     </div>
   </div>
   <p className='footer-link'>
   
    <span><a href="">Careers |</a></span>
    <span><a href="">Privacy Policy |</a></span>
    <span><a href="">Terms & Conditions |</a></span>
   
   </p>
   <p>© 2021 Tourism Department. </p>
   </div>
  );
};

export default Footer;