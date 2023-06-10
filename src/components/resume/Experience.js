import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-[45%] right-0 shadow-shadowOne cursor-pointer z-10"
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
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-[45%] left-0 shadow-shadowOne cursor-pointer z-10"
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
      <div className="w-full h-[60vh]">
        <Slider {...settings}>
          <div>
            <ExperienceCard 
              position = "IT Specialist"
              year = "(Jul 2022 - Jan 2023)"
              company = "Metro Clark International Development Corp. (MCIDC) - Pampanga, Philippines"
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                      Troubleshoot and solve problems quickly to ensure
                      business operations run smoothly.
                    </p>
                  </li>
                  <li>
                    <p>
                      Install all new technology for the company or for new
                      hires including computer operating systems, software
                      programs and applications.
                    </p>
                  </li>
                  <li>
                    <p>
                      General understanding of basic computer terminology
                      and a strong passion to learn.
                    </p>
                  </li>
                  <li>
                    <p>
                      Provides ongoing network support, addresses
                      availability issues, overcomes performance problems.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reports on overall network performance including
                      frequent problems, underlying issues and plans
                      toimprove network availability, performance and
                      problem resolution.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ensuring stable operation of existing network
                      equipment is crucial for minimizing downtime,
                      improving user experience, and enhancing security.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <ExperienceCard 
              position = "Sales Associate"
              year = "(Jul 2021 – Jul 2022)"
              company = "All About Baking, SM Cabanatuan - Nueva Ecija, Philippines"
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                      Assess customers’ needs and provide assistance and information on product features
                    </p>
                  </li>
                  <li>
                    <p>
                      Maintain in-stock and presentable condition assigned areas, to follow and achieve department’s sales goals on a monthly, quarterly and yearly basis.
                    </p>
                  </li>
                  <li>
                    <p>
                    Remain knowledgeable on products offered and discuss available options.
                    </p>
                  </li>
                  <li>
                    <p>
                      Process POS (point of sale) purchases.
                    </p>
                  </li>
                  <li>
                    <p>
                      Team up with co-workers to ensure proper customer service and actively seek out customers in store.
                    </p>
                  </li>
                  <li>
                    <p>
                      Handle returns of merchandise and comply with inventory control procedures.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <ExperienceCard 
              position = "Stock Clerk"
              year = "(Nov 2020 – Dec 2020)"
              company = "Toy Kingdom Express, SM Cabanatuan - Philippines"
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                    Assisting in checking the correctness and condition of deliveries.
                    </p>
                  </li>
                  <li>
                    <p>
                    Transferring stock inside the warehouse.
                    </p>
                  </li>
                  <li>
                    <p>
                    Labelling items for pricing, storage, and transfer.
                    </p>
                  </li>
                  <li>
                    <p>
                      Notifying supervisors and managers of inventory levels.
                    </p>
                  </li>
                  <li>
                    <p>
                      Supporting the warehouse manager in the course of their duties.
                    </p>
                  </li>
                  <li>
                    <p>
                      Following state and federal safety standards.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <ExperienceCard 
              position = "Data Entry or Encoder"
              year = "(Mar 2019 – Mar 2020)"
              company = "St. Bernadette Credit and Lending Corporation - Nueva Ecija, Philippines"
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                      Accurately and efficiently encode all data that needs organizing and recording.
                    </p>
                  </li>
                  <li>
                    <p>
                      Transcribe, scan or photocopy hard copy documents and assure files are properly prepared and saved to backup drives.
                    </p>
                  </li>
                  <li>
                    <p>
                      Perform any other office tasks that management requires assistance with (checking/cleaning machine if needed, answering phones, etc.)
                    </p>
                  </li>
                  <li>
                    <p>
                      Report any major errors or inconsistencies to upper management and maintain report logs of in-progress and/or completed work.
                    </p>
                  </li>
                  <li>
                    <p>
                      Adhere to and meet set schedules and deadlines by input, track, and maintain all encoded data.
                    </p>
                  </li>
                  <li>
                    <p>
                      Self-audit my work checking for errors or duplication.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <ExperienceCard 
              position = "Restaurant Worker / Service Crew"
              year = "(Oct 2017 - Dec 2018)"
              company = "McDonald’s Emirates, Emirates Fast Food Company L.L.C.– Sharjah, U. A. E."
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                      Respond to questions, concerns, and complaints from customers, vendors, or clients.
                    </p>
                  </li>
                  <li>
                    <p>
                      Arrive to my shift on time and prioritize important tasks then manage my time effectively.
                    </p>
                  </li>
                  <li>
                    <p>
                      Escalate any problems or complaints to the relevant supervisor or manager.
                    </p>
                  </li>
                  <li>
                    <p>
                      Operate equipment relative to my role.
                    </p>
                  </li>
                  <li>
                    <p>
                      Maintain professionalism and a positive attitude.
                    </p>
                  </li>
                  <li>
                    <p>
                      Work and communicate effectively with co-workers and management.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <ExperienceCard 
              position = "Database Management System Cum Computer Networking – Internship"
              year = " (Nov 2016 - Mar 2017)"
              company = "Regional Trial Court (Branch 37) – Nueva Ecija, Philippines"
              description = {
                <ul className="list-disc">
                  <li>
                    <p>
                    Identify areas where the application can be optimized for better performance, such as reducing memory usage, improving response times, or optimizing algorithms.
                    </p>
                  </li>
                  <li>
                    <p>
                      Implement appropriate security measures to protect the application and user data, such as encryption, authentication, and access control, depending on the application's requirements.
                    </p>
                  </li>
                  <li>
                    <p>
                      Create a detailed design plan for the desktop application, including its architecture, user interface, data structures, and algorithms. This involves making decisions on programming languages, frameworks, and tools to be used.
                    </p>
                  </li>
                  <li>
                    <p>
                      Conduct thorough testing of the application to identify and fix any bugs or issues. This includes unit testing, integration testing, and performing debugging tasks to ensure the application functions correctly.
                    </p>
                  </li>
                </ul>
              }
            />
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default Experience;
