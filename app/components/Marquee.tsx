'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

 
 const images = [
  '/code.png',
  '/sourcingspherglobal.png',
  '/Apple.png',
  '/spaceshooter.png',
  '/real.png',
];


const Marquee = () => {
  return (
    <div>
      <h1 className='max-w-6xl mx-auto  text-4xl lg:text-6xl font-medium mt-30 mb-15'>Project</h1>
        <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-8 md:px-8 my-3 ">
      {/* Blur overlays */}
      
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

      {/* Marquee container */}
      <div className="whitespace-nowrap animate-marquee flex gap-4">
        {/* Duplicate the images twice for smooth infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`brand-${index}`}
            className="h-7- w-90 md:h-90 rounded-md  md:w-110 object-cover"
  
          />
        ))}
      </div>
       <div className="whitespace-nowrap animate-marquee2 mt-8 flex gap-4">
        {/* Duplicate the images twice for smooth infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`brand-${index}`}
            className="h-7- w-90 md:h-90 rounded-md  md:w-110 object-cover"
          />
        ))}
      </div>
      <div className='w-full flex justify-center my-10'>
<Link href='/product'><motion.button 
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
className='items-center bg-gray-50 shadow-xl text-gray-400 px-2 py-1 rounded-sm text-xl cursor-pointer'>See More</motion.button></Link>
      </div>
    </div>
    </div>
  
  );
};

export default Marquee;
