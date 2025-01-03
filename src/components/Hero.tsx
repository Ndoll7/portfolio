import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat  bg-[url(/banner.png)] bg-cover'
    style={{backgroundSize:"35%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar/>
      <div className="container grid  lg:grid-cols-2 h[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[60px] sm:text-[100px] pt-8  font-bold leading-tight flex justify-between item-right  text-white ">
          <div className=' sm:mt-7 gap-4 flex-row mt-64 text-center ml-9'>
            <p  data-aos="zoom-in-up">I&apos;m</p>
            <p className='text-cyan-500' data-aos="zoom-in-up">Nisha</p>
            <p data-aos="zoom-in-up">Jabbar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
