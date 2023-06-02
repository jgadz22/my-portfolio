import React from 'react'
import { rightBannerImg } from "../../assets/assetsIndex";

const RightBanner = () => {
  return (
    <>
        <img 
            src={rightBannerImg}
            alt="bannerImage" 
            className="w-[500px] h-[680px] z-10" 
        />
    </>
  )
}

export default RightBanner