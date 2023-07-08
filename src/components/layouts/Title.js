import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({ title, desc }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 1,
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
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            {title}
          </h3>
          <h1 className="text-5xl text-gray-300 font-bold capitalize">
            {desc}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Title;
