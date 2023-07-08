import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsCard = ({ title, img, des, projRef }) => {
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
            duration: 3,
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
    <>
    <div ref={ref}>
      <motion.div animate={animation}>
        <div className="w-full h-96 sm:h-80 mdl:h-60 lgl:h-48 xl:h-80 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-5 md:px-10 flex justify-between item-center shadow-shadowOne relative mb-10 group gap-5">
            <div className="w-1/4 flex items-center left-0 group-hover:scale-110 ease-in duration-300">
                <img src={img} width='75' height='75' alt='/'/>
            </div>
            <div className="w-3/4 h-full flex items-center justify-center relative">
                <div className='w-full h-full flex items-center justify-center z-2'>
                    <span className='text-4xl font-bold text-designColor capitalize group-hover:text-xl  duration-200 delay-200 group-hover:-translate-x-44 group-hover:-translate-y-20 group-hover:opacity-0'>{title}</span>
                </div>
                <div className="w-full h-full flex items-center left-0 z-1 absolute opacity-0 group-hover:opacity-100 duration-200 delay-200">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        
                    >
                        <p className='text-sm md:text-lg font-bodyFont'>
                            <span className='text-lg md:text-xl font-bold text-designColor capitalize pr-[.8px]'>
                                {title}
                            </span>
                            {des}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
        
      </motion.div>
    </div>
    </>
  )
}

export default SkillsCard