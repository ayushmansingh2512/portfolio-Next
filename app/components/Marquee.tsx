'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const images = [
  '/code.png',
  '/sourcingspherglobal.png',
  '/Apple.png',
  '/real.png',
];

const secondImages = [
  '/c1.png',
  '/p1.png',
 
  '/spaceshooter.png',
  '/real.png',
];

const Marquee = () => {
  return (
    <div>
      <h1 className='max-w-6xl mx-auto text-4xl lg:text-6xl font-medium mt-30 mb-15'>Project</h1>
      
      <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-8 md:px-8 my-3">
        {/* Blur overlays */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

        {/* First Marquee container */}
        <div className="whitespace-nowrap animate-marquee flex gap-4">
          {/* Duplicate the images multiple times for smooth infinite scroll */}
          {[...images, ...images, ...images, ...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`brand-${index}`}
              className="h-60 w-80 md:h-90 md:w-110 rounded-md object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Second Marquee container - smaller and reverse direction */}
        <div className="whitespace-nowrap animate-marquee-reverse mt-8 flex gap-4">
          {/* Duplicate the images multiple times for smooth infinite scroll */}
          {[...secondImages, ...secondImages, ...secondImages, ...secondImages, ...secondImages].map((src, index) => (
            <img
              key={`second-${index}`}
              src={src}
              alt={`brand-second-${index}`}
              className="h-60 w-80 md:h-90 md:w-110 rounded-md object-cover flex-shrink-0"
            />
          ))}
        </div>

        <div className='w-full flex justify-center my-10'>
          <Link href='/product'>
            <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className='items-center bg-gray-50 shadow-xl text-gray-400 px-2 py-1 rounded-sm text-xl cursor-pointer'
            >
              See More
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marquee;