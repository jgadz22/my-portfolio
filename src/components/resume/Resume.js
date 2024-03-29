import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full px-4 py-20 border-b-[1px] border-b-black overflow-x-hidden">
      <div className="flex justify-center items-center text-center">
        <Title title="VARIOUS EXPERIENCE" desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${educationData ? "border-designColor rounded-lg xl:border-b-transparent" : "border-transparent xl:border-b-designColor"} resumeli`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg xl:border-b-transparent" : "border-transparent xl:border-b-designColor"} resumeli`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${experienceData ? "border-designColor rounded-lg xl:border-b-transparent" : "border-transparent xl:border-b-designColor"} resumeli`}
          >
            Experince
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${achievementData ? "border-designColor rounded-lg xl:border-b-transparent" : "border-transparent xl:border-b-designColor"} resumeli`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievements />}
    </section>
  );
};

export default Resume;
