import React from "react";

const ExperienceCard = ({ position, year, company, description }) => {
  return (
    <div class="w-full h-full flex justify-center items-center py-5">
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-[65%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex justify-center items-center gap-10 shadow-shadowOne group">
          <div class="top-0 w-full h-full justify-center items-center duration-300 opacity-100 p-5">
            <div>
              <h3 class="text-2xl font-semibold flex justify-left group-hover:text-designColor">
                {position}
              </h3>
            </div>
            <div class="">
              <p class="text-md mt-2 text-gray-400 group-hover:text-white flex justify-left">
                {year}
              </p>
            </div>
            <div class="">
              <p class="text-md mt-2 text-gray-400 group-hover:text-white flex justify-left">
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
  );
};

export default ExperienceCard;
