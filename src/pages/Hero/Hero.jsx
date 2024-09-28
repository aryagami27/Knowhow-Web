import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import About from '../About/About';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col bg-[#13131C]">
      <div className="w-full  bg-gradient-to-b from-[#17173A] from-14% to-[#13131C]">
        <p className='font-bold mt-40 text-7xl text-center'>Know<span className='text-[#3954DF]'>How</span>:</p>
        <p className='font-bold text-7xl text-center'>The catalyst for </p>
        <p className='font-bold text-7xl text-center text-[#AF66DF]'>change</p>
        <div className="mt-8">
          <Link className="mx-auto flex items-center justify-center max-w-56 bg-green-700 text-white rounded-full h-[60px] hover:bg-green-600 shadow-[#ffffff7e] shadow-inner transition-colors duration-200">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 size-6" />
            <p>Join our Community</p>
          </Link>
        </div>
        <div className="mt-20 mb-10">
          moving cards
        </div>
      </div>
      <div className="w-full p-8">  
        <About/>
      </div>
    </div>
  );
}

export default Hero;
