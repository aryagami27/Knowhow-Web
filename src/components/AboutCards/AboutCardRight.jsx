import React from 'react';

function AboutCardRight({ title, content, imageSrc }) {
  return (
    <div className="relative flex items-end h-[241px] w-screen overflow-hidden -left-8">
      <div className="h-[241px] w-[calc(100vw-240px)] max-w-[1047px] bg-[#24242C] text-white flex flex-col justify-center px-8 rounded-e-xl relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
      </div>
      <div className="ml-[70px] w-[338px] h-[241px]">
        <img
          src={imageSrc}
          alt="About Image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default AboutCardRight;

