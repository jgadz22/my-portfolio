import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="px-4 w-full py-20 border-b-[1px] border-b-black overflow-hidden"
    >
      <Title title="Features" desc="What I Do?" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-20 gap-6">
        <Card
          title="Website/App Design"
          des="Translate visual concepts into functional interfaces, then create wireframes, mockups, and prototypes, ensuring that the design is aesthetically pleasing and user-friendly."
          icon={<FaGlobe />}
        />
        <Card
          title="HTML/CSS Coding"
          des="Write HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) code to structure and style the content of web pages. HTML defines the page structure, while CSS determines the visual presentation."
          icon={<SiProgress />}
        />
        <Card
          title="JavaScript Development"
          des="Use JavaScript to enhance the interactivity and functionality of websites, then implement features like dropdown menus, image sliders, form validation, animations, and other interactive elements."
          icon={<FaBars />}
        />
        <Card
          title="Responsive Design"
          des="Ensure that websites and applications are optimized for different devices and screen sizes, then use responsive design techniques, and flexible images, to create a consistent and accessible experience."
          icon={<FaMobile />}
        />
        <Card
          title="Browser Compatibility"
          des="Test and ensure that websites work correctly across various web browsers (e.g., Chrome, Firefox, Safari, Edge) and their different versions."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Bug Fixing and Testing"
          des="Identify and fix issues, bugs, and inconsistencies in the UI, and conduct thorough testing to ensure proper functionality across different scenarios, devices, and browsers."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
