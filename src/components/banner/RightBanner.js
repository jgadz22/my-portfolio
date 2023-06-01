import React from 'react'
import { rightBannerImg } from "../../assets/assetsIndex";

const RightBanner = () => {
  return (
    <>
        <img 
            src={rightBannerImg}
            alt="bannerImage" 
            className="rounded-lg top-0 left-0 w-full h-screen object-cover z-10" 
        />
    </>
  )
}

export default RightBanner