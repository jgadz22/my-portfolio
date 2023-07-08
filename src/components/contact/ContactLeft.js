import React, { useEffect } from "react";
import { contactImg } from "../../assets/assetsIndex";
import { FaFacebookF } from "react-icons/fa";
import { FiPhoneCall, FiMail} from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactLeft = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: "100%",
        transition: {
          duration: 3,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: "0%",
      });
    }
  }, [inView, animation]);

  return (
  <div className="w-full lgl:w-[35%] " ref={ref}>
    <motion.div animate={animation}>
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#202327] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mb-10 lgl:mb-0">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Joseph Gadiaza</h3>
        <p className="text-lg font-normal text-gray-400">Web Developer</p>
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
        <h2 className="text-base uppercase font-titleFont mb-4">Message/Call me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/joseph.gadiaza/">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="tel:+639511050865">
              <FiPhoneCall />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:gadiazajoseph18@gmail.com">
              <FiMail />
            </a>
          </span>
        </div>
      </div>
    </div>
    </motion.div>
  </div>
  );
};

export default ContactLeft;
