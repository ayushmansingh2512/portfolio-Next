 

import React from 'react'
 
const images = [
'HTML5 (1).svg',
'CSS3.svg',
'JavaScript.svg',
'TypeScript.svg',
'React.svg',
'Next.js.svg',
'Node.js.svg',
'Tailwind CSS.svg',
'MongoDB.svg',
'PostgresSQL.svg',
'Tailwind CSS.svg',
'Git.svg',
'Vercel1.svg',
'Python.svg'
];
const Hero = () => {
  return (
    <div  className="max-w-6xl mx-auto px-4 my-20  flex flex-col justify-between lg:gap-14 gap-8  items-start">
      <p className='text-green-600 bg-green-200 px-5 py-2 rounded-md'>Hey my name is Ayushman Singh</p>
      <h1 className='md:text-5xl  text-2xl font-medium leading-snug w-full md:w-[60%]  '
        style={{ wordSpacing: "-0.1 em" }}  >
  Software Developer, Coder, Designer — Building digital experiences.
</h1>
<a href='https://drive.google.com/file/d/14XV7kHWBd75IKO1J1vghT9kB8mN8VGBA/view?usp=sharing' target='/'> <button
           
              
                  className="bg-black text-white lg:text-2xl px-4 py-2 rounded-md cursor-pointer"
                  
                >
                Resume
                </button></a>
<p className=' text-gray-400 text-xl md:text-2xl'>Languages, tools, and frameworks I work with:</p>
<div className='flex flex-wrap gap-5 md:gap-10'>

  {[...images ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`brand-${index}`}
            className="md:h-20 h-10 "
          />
        ))}
</div>

    </div>
  )
}

export default Hero
