import React, { useState } from 'react';
import '../CSS/domainCard.css';
import { motion } from 'framer-motion';

const DomainCard = ({ title, image, content, onReadMore }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="domain-card hover:-translate-y-2 transition-all duration-500 ease-out">
      <div className={`card-inner ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {/* Front Side */}
        <div className="card-face card-front">
          <img src={image} alt={title} className="card-image" />
        </div>

        {/* Back Side */}
        <div className="card-face card-back flex flex-col">
          <div className="card-content">
            <p>{content}</p>
          </div>
          <button 
            className="read-more-button bg-[#AF66DF] hover:bg-[#9528df] transition-all duration-500 ease-out text-white border-none text-sm px-2 py-2 cursor-pointer rounded-md" 
            onClick={onReadMore} // Call the onReadMore handler
          >
            Read More
          </button>
        </div>
      </div>
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default DomainCard;
