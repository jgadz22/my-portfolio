import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ title, des, icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 3,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100%",
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <div className="w-full h-96 px-10 py-8 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
          <div className="h-90 overflow-y-hidden">
            <div className="flex flex-col gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
              <div>
                <span className="text-5xl text-designColor">{icon}</span>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                  {title}
                </h2>
                <p className="text-base">{des}</p>
                <span>
                  <div className="w-full border-b-[2px] border-b-designColor"></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
