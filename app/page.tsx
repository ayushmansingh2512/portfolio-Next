import React from 'react';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <Aboutme/>
      <Footer/>
    </div>
  );
};

export default page;