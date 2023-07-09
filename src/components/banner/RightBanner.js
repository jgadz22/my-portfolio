import React, { useEffect } from "react";
import { rightBannerImg } from "../../assets/assetsIndex";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RightBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: "100%",
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
        delay: 3,
      });
    }
    if (!inView) {
      animation.start({
        opacity: '0%',
      });
    }
  }, [inView, animation]);

  return (
    <div 
    ref={ref} className="flex items-center justify-center w-full lgl:w-1/2">
    <motion.div
      animate={animation}
      className="w-full flex justify-center items-center relative mx-2 lg:mx-0 lg:right-0"
    >
      <img
        src={rightBannerImg}
        alt="bannerImage"
        className="w-[300px] h-[400px] md:w-[500px] md:h-[680px] z-10"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </motion.div>
    </div>
  );
};

export default RightBanner;
