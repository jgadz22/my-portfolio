import React from "react";

const ExperienceCard = ({ position, year, company, description }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full md:w-[90%] mdl:w-[85%] flex justify-center items-center py-5 lg:mx-32 px-5">
        <div className="w-full flex items-center justify-center">
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-5 lg:px-10 flex justify-center items-center gap-5 shadow-shadowOne group">
            <div className="w-full justify-center items-center duration-300 opacity-100 p-5 ">
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
                <p className="text-sm lg:text-lg mt-2 text-gray-400 group-hover:text-white flex justify-left">
                  {company}
                </p>
              </div>
              <div className="text-sm md:text-base text-justify font-medium textgray-400 group-hover:text-gray-300 mt-10">
                <ul className="list-disc">
                  {description.map((items, index) => (
                    <li key={index}>
                      <p>{items}</p>
                    </li>
                  ) )}
                </ul>
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
