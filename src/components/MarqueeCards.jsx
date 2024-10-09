import React, { useState } from 'react';

function MarqueeCards({ image }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='md:w-[300px] w-[200px] h-[150px] rounded-3xl md:h-[200px] md:mx-4 mx-2 shadow-md shadow-black overflow-hidden'>
      {!loaded && (
        <div className='absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-marquee'></div>
      )}
      <img
        src={image}
        className={`w-full h-full object-cover rounded-3xl transition-opacity duration-500 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        alt='Marquee'
      />
    </div>
  );
}

export default MarqueeCards;
