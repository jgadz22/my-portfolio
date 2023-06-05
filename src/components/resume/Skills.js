import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";
import { jsImg } from "../../assets/assetsIndex";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">OTHER</p>
        <h2 className="text-4xl font-bold">Development Skills</h2>
      </div>

      <div className="flex justify-between items-center gap-10">
        <div className="w-1/2">
          <SkillsCard 
            title='Javascript'
            img={jsImg}
          />
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </div>

        <div className="w-1/2">
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
