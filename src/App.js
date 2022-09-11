import React from 'react';
import './App.css'
import Footer from './components/Footer';
import GloballyAccepted from './components/GloballyAccepted';
import Hero from './components/Hero';
import LastestNews from './components/LastestNews ';
import NavBar from './components/NavBar';
import OurTeam from './components/OurTeam';
import Promotional from './components/Promotional';
import Testimonial from './components/Testimonial';
import Text from './components/Text';
import Watch from './components/Watch';
import WhyChooseUs from './components/WhyChooseUs';


const App = () => {
  return (
   <>
   <NavBar/>
   <Hero/>
   <Promotional/>
   <GloballyAccepted/>
   <Watch/>
   <OurTeam/>
   <WhyChooseUs/>
   <Testimonial/>
   <LastestNews/>
  
   <Footer/>
   
   </>
  );
};

export default App;