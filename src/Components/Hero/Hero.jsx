import React from 'react'
import My from '../../assets/my.png'
const Hero = () => {
  return (
    <div id='home' className='text-white flex flex-col justify-center items-center w-3/5 m-auto text-center gap-10'>
      <div className='w-60 h-60 bg-black rounded-full overflow-hidden'>
        <img src={My} className="object-cover" alt="Profile" />
      </div>
        <h1 className='text-7xl font-semibold'><span className='bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text '>I'm Ahad, </span>the Full Stack Developer from Pakistan</h1>
        <p>Hey! I'm Ahad, a Full Stack Developer from Pakistan. I create professional websites and web applications for businesses and individuals. I love to work with modern technologies and frameworks to build high-quality products.</p>
        <div className='flex gap-6 justify-center items-center max-md:flex-col'>

        <button className='bg-gradient-to-r from-orange-500 to-pink-500 py-5 px-10 rounded-full hover:scale-105 transition-all duration-500 '>Contact With Me</button>
        <button className='bg-transparent border-[1px] border-white py-5 px-10 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-500 '>My Resume</button>
        </div>
    </div>
  )
}

export default Hero