import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";



const Banner = () => {
  
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-20">
        <LeftBanner />
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="w-full justify-end flex items-center mr-5">
        <RightBanner />
        <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
