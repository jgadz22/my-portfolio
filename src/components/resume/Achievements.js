import React from "react";
import { motion } from "framer-motion";
import { cssCert, javascriptCert } from "../../assets/assetsIndex";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">My</p>
        <h2 className="text-4xl font-bold">Achivements</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-10 gap-6">
        <AchievementCard
          title="Responsive Web Design"
          desc="This Certification teaches the essential languages used in webpage development: HTML for content and CSS for design. It covers building a cat photo app, utilizing modern techniques like CSS variables, implementing accessibility best practices, and creating responsive layouts with Flexbox and CSS Grid."
          src={cssCert}
          site="https://www.freecodecamp.org/certification/JGadiaza/responsive-web-design"
        />
        <AchievementCard
          title="JavaScript Algorithms and Data Structures"
          desc="This Certification teaches the basics of JavaScript for creating interactive webpages. It covers fundamental concepts like variables, arrays, objects, loops, and functions. You'll also learn about essential algorithms and explore Object-Oriented Programming (OOP) and Functional Programming (FP) paradigms."
          src={javascriptCert}
          site="https://www.freecodecamp.org/certification/JGadiaza/javascript-algorithms-and-data-structures"
        />
      </div>
    </motion.div>
  );
};

export default Achievements;
