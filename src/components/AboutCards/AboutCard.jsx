import React from 'react';

function AboutCard({ title, content, imageSrc }) {
  return (
    <div className="relative flex items-end h-[241px] w-screen overflow-hidden">
      {/* Picture on the left */}
      <div className="w-[338px] h-[241px]">
        <img
          src={imageSrc}
          alt="About Image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Content Card */}
      <div className= "h-[241px] max-w-[1047px] bg-[#24242C] text-white flex flex-col justify-center px-8 rounded-s-xl relative -right-16">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AboutCard;
