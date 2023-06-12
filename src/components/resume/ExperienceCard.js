import React from "react";

const ExperienceCard = ({ position, year, company, description }) => {
  return (
    <div class="w-full h-[100vh] md:h-[70vh] xl:h-[60vh] flex items-center justify-center">
    <div class="w-full h-auto md:w-[90%] mdl:w-[65%] flex justify-center items-center py-5 lg:mx-48 px-5">
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-5 lg:px-10 flex justify-center items-center gap-5 shadow-shadowOne group">
          <div class="top-0 w-full h-full justify-center items-center duration-300 opacity-100 p-5 ">
            <div>
              <h3 class="text-xl lg:text-2xl font-semibold flex justify-left group-hover:text-designColor">
                {position}
              </h3>
            </div>
            <div class="">
              <p class="text-md lg:text-lg mt-2 text-gray-400 group-hover:text-white flex justify-left">
                {year}
              </p>
            </div>
            <div class="">
              <p class="text-md lg:text-lg mt-2 text-gray-400 group-hover:text-white flex justify-left">
                {company}
              </p>
            </div>
            <div class="text-base text-justify font-medium textgray-400 group-hover:text-gray-300 mt-10">
              {description}
            </div>
            <span>
              <div class="w-full border-b-[2px] border-b-designColor mt-10"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default ExperienceCard;
