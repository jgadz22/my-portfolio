import React from "react";

const ResumeCard = ({ title, subTitle, des, src }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-5 flex flex-col justify-center gap-10 shadow-shadowOne relative">
        <img
          className="top-0 left-0 w-full h-[250px] object-fit xl:object-cover md:object-cover opacity-100 group-hover:opacity-10 duration-300"
          src={src}
          alt={title}
        />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center gap-5 duration-300 opacity-0 delay-100 group-hover:opacity-100 px-5">
          <div className="w-full">
            <h3 className="w-full text-md md:text-2xl font-semibold group-hover:text-white">
              {title}
            </h3>
            <p className="w-full text-md mt-2 text-gray-400 group-hover:text-white">
              {subTitle}
            </p>
          </div>
          <p className="w-full text-xs md:text-base text-justify font-medium textgray-400 group-hover:text-gray-300 pr-4 md:pr-0">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
