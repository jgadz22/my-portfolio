import React from 'react'
import { rightBannerImg } from "../../assets/assetsIndex";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img 
            src={rightBannerImg}
            alt="bannerImage" 
            className="w-[300px] h-[400px] md:w-[500px] md:h-[680px] z-10" 
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  )
}

export default RightBanner