import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-8 mdl:w-14 mdl:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl mdl:text-2xl text-gray-400 flex justify-center items-center absolute mdl:top-[45%] right-0 bottom-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      {" "}
      <HiArrowRight />{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-8 mdl:w-14 mdl:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl mdl:text-2xl text-gray-400 flex justify-center items-center absolute mdl:top-[45%] left-0 bottom-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      {" "}
      <HiArrowLeft />{" "}
    </div>
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
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#46eb34",
                color: "blue",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                color: "blue",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
        <h2 className="text-4xl font-bold">Work Experience</h2>
      </div>
      <div className="w-full items-center justify-center gap-5">
        <Slider {...settings}>
          <div className="w-full md:w-[90%] mdl:w-[85%] flex items-center justify-center">
            <ExperienceCard
              position="IT Specialist"
              year="(Jul 2022 - Jan 2023)"
              company="Metro Clark International Development Corp. (MCIDC) - Pampanga, Philippines"
              description={[
                "Troubleshoot and solve problems quickly to ensure business operations run smoothly.",

                "Install all new technology for the company or for new hires including computer operating systems, software programs and applications.",

                "General understanding of basic computer terminology and a strong passion to learn.",

                "Provides ongoing network support, addresses availability issues, overcomes performance problems.",

                "Reports on overall network performance including frequent problems, underlying issues and plans toimprove network availability, performance and problem resolution.",

                "Ensuring stable operation of existing network equipment is crucial for minimizing downtime, improving user experience, and enhancing security.",
              ]}
            />
          </div>
          <div>
            <ExperienceCard
              position="Sales Associate"
              year="(Jul 2021 – Jul 2022)"
              company="All About Baking, SM Cabanatuan - Nueva Ecija, Philippines"
              description={[
                "Assess customers’ needs and provide assistance and information on product features.",

                "Maintain in-stock and presentable condition assigned areas, to follow and achieve department’s sales goals on a monthly, quarterly and yearly basis.",

                "Remain knowledgeable on products offered and discuss available options.",

                "Process POS (point of sale) purchases.",

                "Team up with co-workers to ensure proper customer service and actively seek out customers in store.",

                "Handle returns of merchandise and comply with inventory control procedures.",
              ]}
            />
          </div>
          <div>
            <ExperienceCard
              position="Stock Clerk"
              year="(Nov 2020 – Dec 2020)"
              company="Toy Kingdom Express, SM Cabanatuan - Philippines"
              description={[
                "Assisting in checking the correctness and condition of deliveries.",

                "Transferring stock inside the warehouse.",

                "Labelling items for pricing, storage, and transfer.",

                "Notifying supervisors and managers of inventory levels.",

                "Supporting the warehouse manager in the course of their duties.",

                "Following state and federal safety standards.",
              ]}
            />
          </div>
          <div>
            <ExperienceCard
              position="Data Entry or Encoder"
              year="(Mar 2019 – Mar 2020)"
              company="St. Bernadette Credit and Lending Corporation - Nueva Ecija, Philippines"
              description={[
                "Accurately and efficiently encode all data that needs organizing and recording.",

                "Transcribe, scan or photocopy hard copy documents and drives.",

                "Perform any other office tasks that management requires assistance with (checking/cleaning machine if needed, answering phones, etc.)",

                "Report any major errors or inconsistencies to upper management and maintain report logs of in-progress and/or completed work.",

                "Adhere to and meet set schedules and deadlines by input, track, and maintain all encoded data.",

                "Self-audit my work checking for errors or duplication.",
              ]}
            />
          </div>
          <div>
            <ExperienceCard
              position="Restaurant Worker / Service Crew"
              year="(Oct 2017 - Dec 2018)"
              company="McDonald’s Emirates, Emirates Fast Food Company L.L.C.– Sharjah, U. A. E."
              description={[
                "Respond to questions, concerns, and complaints from customers, vendors, or clients.",

                "Arrive to my shift on time and prioritize important tasks then manage my time effectively.",

                "Escalate any problems or complaints to the relevant supervisor or manager.",

                "Operate equipment relative to my role.",

                "Maintain professionalism and a positive attitude.",

                "Work and communicate effectively with co-workers and management.",
              ]}
            />
          </div>
          <div>
            <ExperienceCard
              position="Database Management System Cum Computer Networking – Internship"
              year="(Nov 2016 - Mar 2017)"
              company="Regional Trial Court (Branch 37) – Nueva Ecija, Philippines"
              description={[
                "Identify areas where the application can be optimized for better performance, such as reducing memory usage, improving response times, or optimizing algorithms.",

                "Implement appropriate security measures to protect the application and user data, such as encryption, authentication, and access control, depending on the application's requirements.",

                "Create a detailed design plan for the desktop application, including its architecture, user interface, data structures, and algorithms. This involves making decisions on programming languages, frameworks, and tools to be used.",

                "Conduct thorough testing of the application to identify and fix any bugs or issues. This includes unit testing, integration testing, and performing debugging tasks to ensure the application functions correctly.",
              ]}
            />
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default Experience;
