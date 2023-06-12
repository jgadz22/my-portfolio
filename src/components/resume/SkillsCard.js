import React from 'react'
import { motion } from 'framer-motion';

const SkillsCard = ({ title, img, des }) => {
  return (
    <>
        <div className="w-full h-80 md:h-60 lg:h-40 xl:h-60 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex justify-between item-center shadow-shadowOne relative mb-10 group">
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
                        <p className='text-md font-bodyFont'>
                            <span className='text-xl font-bold text-designColor capitalize pr-[.5px]'>
                                {title}
                            </span>
                            {des}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillsCard