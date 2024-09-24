import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import About from '../About/About';
import Events from '../Events/Events';

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-screen p-8 py-40" 
         style={{ background: 'linear-gradient(to bottom, #17173A 14%, #13131C 25%)' }}>
      
      {/* Left side */}
      <div className="relative">
        <div className="grid grid-rows-3 gap-4">
          {/* Top Row - No space on the left */}
          <div className="flex -ml-10">
            <div className="w-80 h-56 relative rounded-xl shadow-lg mr-2 overflow-hidden">
              <img src="./bitcon.jpg" alt="Bitcoin" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="w-80 h-56 relative rounded-xl shadow-lg overflow-hidden">
              <img src="./uiux.jpg" alt="UI/UX" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex">
            <div className="w-80 h-56 relative rounded-xl shadow-lg -translate-x-1/2 overflow-hidden">
              <img src="./datascience.jpg" alt="Data Science" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="w-80 h-56 relative rounded-xl shadow-lg -ml-[150px] overflow-hidden">
              <img src="./ai.jpg" alt="AI" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center">
            <div className="w-80 h-56 relative rounded-xl shadow-lg -translate-x-3/4 overflow-hidden">
              <img src="./cloud.jpg" alt="Cloud Computing" className="w-full h-full opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="space-y-8">
        {/* Text */}
        <div className="text-white text-6xl font-bold leading-snug">
          <p>Know<span style={{ color: '#3954DF' }}>How</span>:</p>
          <p>The catalyst for</p>
          <p style={{ color: '#AF66DF' }}>change</p>
        </div>

        <button className="flex items-center justify-center space-x-2 bg-[#03A21C] text-black px-6 py-3 rounded-full hover:bg-green-500">
          <FontAwesomeIcon icon={faWhatsapp} size='lg' color='white'/>
          <span className='text-white'>Join our Community</span>
        </button>
      </div>
      {/* <Events /> */}
      <About />  
    </div>
  );
}

export default Hero;
