import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";
import { cssImg, firebaseImg, githubImg, htmlImg, javaImg, jsImg, nodeImg, phpImg } from "../../assets/assetsIndex";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">OTHER</p>
        <h2 className="text-4xl font-bold">Development Skills</h2>
      </div>

      <div className="flex justify-between items-center gap-10">
        <div className="w-1/2">
          <SkillsCard 
            title='Javascript'
            img={jsImg}
            des=' is a programming language used to make websites interactive. It allows developers to create dynamic elements and respond to user actions. It works on both web browsers and servers and supports different programming styles.'
          />
          <SkillsCard 
            title='CSS'
            img={cssImg}
            des=", short for Cascading Style Sheets, is a programming language that makes websites look good. It's used to control how things like colors, fonts, and layouts appear on web pages. By using CSS, designers can make sure that their websites have a consistent and attractive visual style."
          />
          <SkillsCard 
            title='Node JS'
            img={nodeImg}
            des=" is a platform that lets developers use JavaScript to build server-side applications. It allows for efficient handling of multiple requests and enables real-time applications. Node.js has a wide range of tools and resources available, making it a popular choice for web development."
          />
          <SkillsCard 
            title='Java'
            img={javaImg}
            des=" is a popular and flexible programming language used to build different types of applications, like desktop software, mobile apps, and web applications. It's known for its reliability and ability to work on various devices. Java has a wide range of tools and resources available, making it widely used in different areas of software development."
          />
        </div>

        <div className="w-1/2">
          <SkillsCard 
            title='HTML'
            img={htmlImg}
            des=" is the language used to create web pages. It provides tags and elements that define the structure and content of a webpage. It allows you to add headings, paragraphs, images, links, and other elements to your web pages. HTML works together with CSS and JavaScript to make websites look good and interactive."
          />
          <SkillsCard 
            title='Github'
            img={githubImg}
            des=" is a website where developers can save and share their code. It helps them work together on projects, keep track of changes, and manage their code easily. It's widely used for collaboration and hosting open-source projects."
          />
          <SkillsCard 
            title='Firebase'
            img={firebaseImg}
            des=" is a platform that helps developers build web and mobile applications easily. It offers tools for authentication, data storage, hosting, and more. With Firebase, developers can focus on creating the frontend of their apps without worrying about the backend infrastructure. It simplifies app development and enables real-time collaboration."
          />
          <SkillsCard 
            title='PHP'
            img={phpImg}
            des=" is a programming language used for creating websites. It runs on the server and helps generate dynamic web pages. It has features for interacting with databases and is widely used for building websites and web applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
