import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-50 flex flex-col justify-between gap-8 mb-20 items-start">
      <a href="mailto:ayushmansingh2512@gmail.com">
        <p className=" text-lg md:text-2xl text-gray-400">Email : ayushmansingh2512@gmail.com</p>
      </a>
      
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/ayushman-singh-9a6244265" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-auto' src="/linkedIn.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ayushmansingh2512" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-auto' src="/GitHub.svg" alt="GitHub" />
        </a>
        <a href="https://www.youtube.com/@ayushmansingh261" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-auto' src="/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/ayushman_singh_red/?hl=en" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-auto' src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://leetcode.com/u/ayushmansingh2512/" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-auto' src="/leetcode.svg" alt="Leetcode" />
        </a>
      </div>

      <p className="text-sm text-gray-500">© 2025 Ayushman Singh. All rights reserved.</p>
    </div>
  );
};

export default Footer;
