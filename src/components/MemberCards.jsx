import React from 'react'

import { images } from '../assets'

function MemberCards({name,img,role}) {
  return (
    <div className='relative'>
        <svg width="0" height="0" className='absolute'>
            <clipPath id="custom-shape" clipPathUnits="objectBoundingBox">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.57 0.09C0.57 0.04 0.53 0 0.48 0H0.15C0.07 0 0 0.07 0 0.15V0.85C0 0.93 0.07 1 0.15 1H0.85C0.93 1 1 0.93 1 0.85V0.32C1 0.24 0.93 0.18 0.85 0.18H0.66C0.61 0.18 0.57 0.13 0.57 0.09Z"
            />
            </clipPath>
        </svg>
        <div className='w-full h-full bg-white aspect-square relative' style={{clipPath: 'url(#custom-shape)'}}>
            <img src={images.profike} alt="" className='w-full h-full object-cover'/>
            <div className='w-full h-full bg-gradient-to-t from-[#262655] to-[rgba(38, 38, 85, 0)] to-35% aspect-square absolute z-10 top-0' style={{clipPath: 'url(#custom-shape)'}}>
                <p className='text-2xl lg:text-3xl bottom-0 absolute text-center w-full font-bold mb-4'>{name || "Arya Gami"}</p>
            </div>
        </div>
        <div className="right-0 top-0 absolute w-[40%] bg-[#6363FF] rounded-full flex items-center justify-center h-[15%] text-sm">
            <p className='font-semibold xl:text-xl '>{role || "UI/UX"}</p>
        </div>
    </div>
    
  )
}

export default MemberCards
