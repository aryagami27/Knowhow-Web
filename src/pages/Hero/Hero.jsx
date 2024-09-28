import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import About from '../About/About';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import MarqueeCards from '../../components/MarqueeCards';

function Hero() {
  return (
    <div className="flex flex-col bg-[#13131C]">
      <div className="w-full bg-gradient-to-b from-[#17173A] from-14% to-[#13131C]">
        <p className='font-bold mt-40 md:text-7xl text-5xl text-center'>Know<span className='text-[#3954DF]'>How</span>:</p>
        <p className='font-bold md:text-7xl text-center text-5xl'>The catalyst for </p>
        <p className='font-bold md:text-7xl text-5xl text-center text-[#AF66DF]'>change</p>
        <div className="mt-8">
          <Link className="mx-auto flex items-center justify-center max-w-56 bg-green-700 text-white rounded-full h-[60px] hover:bg-green-600 shadow-[#ffffff7e] shadow-inner transition-colors duration-200">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 size-6" />
            <p>Join our Community</p>
          </Link>
        </div>
        <div className="my-10">
          <Marquee className='w-full md:h-80 h-40'>
            <MarqueeCards image='./ai.jpg'/>
            <MarqueeCards image='./appdev.jpg'/>
            <MarqueeCards image="./arvr.jpg"/>
            <MarqueeCards image='./bitcon.jpg'/>
            <MarqueeCards image='./cloud.jpg'/>
            <MarqueeCards image='./cybersec.jpg'/>
            <MarqueeCards image='datascience.jpg'/>
            <MarqueeCards image='iot.jpg'/>
            <MarqueeCards image='uiux.jpg'/>
            <MarqueeCards image='webdev.jpg'/>
          </Marquee>
        </div>
      </div>
      <div className="w-full p-8">  
        <About/>
      </div>
    </div>
  );
}

export default Hero;
