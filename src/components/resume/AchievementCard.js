import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AchievementCard = ({ title, desc, src, site, projRef }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log(projRef);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: projRef === "ref1" ? "-100%" : "100%",
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration:1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
              src={src}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl lg:text-xl uppercase text-designColor font-normal">
                  {title}
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg lg:text-xl w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a href={site}>
                      <FaGlobe />
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-sm lg:text-lg tracking-wide mt-3 hover:text-gray-100 duration-300">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementCard;
