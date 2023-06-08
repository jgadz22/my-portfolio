import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex-justify-center items-center absolute right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    > <HiArrowRight /> </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex-justify-center items-center absolute left-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    > <HiArrowLeft /> </div>
  );
}
const Experience = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevtArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ 
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",
         }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive ? {
            width: "12px",
            height: "12px",
            background: "#46eb34",
            color: "blue",
            borderRadius: "50%",
            cursor: "pointer",
          } : {
            width: "12px",
            height: "12px",
            background: "gray",
            color: "blue",
            borderRadius: "50%",
            cursor: "pointer",
          }
        }
      >
      </div>
    )
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
        <h2 className="text-4xl font-bold">Job Experience</h2>
      </div>
      <div className='max-w-6xl mx-auto'>     
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default Experience;
