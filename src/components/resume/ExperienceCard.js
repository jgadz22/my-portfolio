import React from "react";

const ExperienceCard = ({ position, year, company, description }) => {
  return (
    <div className="w-full h-[120vh] sm:h-[100vh] md:h-[100vh] xl:h-[90vh] flex items-center justify-center">
      <div className="w-full h-auto md:w-[90%] mdl:w-[85%] flex justify-center items-center py-5 lg:mx-32 px-5">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-5 lg:px-10 flex justify-center items-center gap-5 shadow-shadowOne group">
            <div className="top-0 w-full h-full justify-center items-center duration-300 opacity-100 p-5 ">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold flex justify-left group-hover:text-designColor">
                  {position}
                </h3>
              </div>
              <div className="">
                <p className="text-md lg:text-lg mt-2 text-gray-400 group-hover:text-white flex justify-left">
                  {year}
                </p>
              </div>
              <div className="">
                <p className="text-md lg:text-lg mt-2 text-gray-400 group-hover:text-white flex justify-left">
                  {company}
                </p>
              </div>
              <div className="text-sm md:text-base text-justify font-medium textgray-400 group-hover:text-gray-300 mt-10">
                {description}
              </div>
              <span>
                <div className="w-full border-b-[2px] border-b-designColor mt-10"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
