import React, { useState } from 'react';
import '../CSS/domainCard.css';
import { motion } from 'framer-motion';

const DomainCard = ({ title, image, content }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[250px] cursor-pointer card-container" onClick={handleFlip}>
        <motion.div
          className={`card absolute w-full h-full rounded-lg overflow-hidden transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front Side with Image */}
          <div className={`flex items-center justify-center w-full h-full backface-hidden`}>
            <img src={image} alt={title} className="w-full h-full object-cover opacity-60" />
          </div>

          {/* Back Side with Black Overlay and Content */}
          <div className={`absolute w-full h-full rotate-y-180 backface-hidden flex items-center justify-center`}>
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
              <div className="text-white p-4 text-center">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Title Below the Card */}
      <h2 className="mt-2 text-lg font-semibold text-white text-center">{title}</h2>
    </div>
  );
};

export default DomainCard;
