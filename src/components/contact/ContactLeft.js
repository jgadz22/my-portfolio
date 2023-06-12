import React from "react";
import { contactImg } from "../../assets/assetsIndex";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#202327] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mb-10 lgl:mb-0">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Joseph Gadiaza</h3>
        <p className="text-lg font-normal text-gray-400">Front End Developer</p>
        <p className="text-base text-gray-400 tracking-widde text-justify">
          Embracing the Artistry of Front-End Development, Crafting Immersive
          User Journeys with Meticulous Code, Stunning Visuals, and Seamless
          Interactions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+63 9511050865</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">gadiazajoseph18@gmail.com</span>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/joseph.gadiaza/">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.github.com/jgadz22">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/joseph-gadiaza-31b7311a1/">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
