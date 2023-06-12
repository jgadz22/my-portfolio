import React from 'react'
import ResumeCard from './ResumeCard'
import { NEUSTMGTImg, SRNHSImg, TSCSImg } from '../../assets/assetsIndex'
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
    > 
        <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2003 - 2017</p>
            <h2 className="text-4xl font-bold">Educational Background</h2>
        </div>
        <div className='flex items-center justify-center'>
            <div className='mt-14 w-full md:w-[75%] xl:w-[50%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard 
                    title='BSIT(Major in Database Application Programming)' 
                    subTitle='Nueva Ecija University of Science and Technology - MGT (2013-2017)' 
                    des='I had the privilege of being recognized as a dedicated scholar throughout my entire academic journey.'
                    src={NEUSTMGTImg}
                />
                <ResumeCard 
                    title='Secondary' 
                    subTitle='San Ricardo National High School (2009-2013)' 
                    des='In my time, I was a part of the first section, known as the Special Science Class.'
                    src={SRNHSImg}
                />
                <ResumeCard 
                    title='Elementary' 
                    subTitle='Talavera South Central School (2003-2009)' 
                    des="I'm one of the top 10 students in the classroom every year."
                    src={TSCSImg}
                />
            </div>
        </div>
    </motion.div>
  )
}

export default Education