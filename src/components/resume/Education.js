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
                    des='Nueva Ecija University of Science and Technology offers a comprehensive and enriching educational experience for students in the field of Information Technology. With a major in Database Application Programming, you will receive the necessary training and support to succeed in your chosen career path.'
                    src={NEUSTMGTImg}
                />
                <ResumeCard 
                    title='Secondary' 
                    subTitle='San Ricardo National High School (2009-2013)' 
                    des='San Ricardo National High School is a reputable educational institution that plays a significant role in shaping the future of its students. It provides them with a strong foundation in education, equipping them with the necessary skills and knowledge to pursue their goals and aspirations in life.'
                    src={SRNHSImg}
                />
                <ResumeCard 
                    title='Elementary' 
                    subTitle='Talavera South Central School (2003-2009)' 
                    des="Talavera South Central School plays a significant role in laying a strong foundation for its students' education. It prepares them for their future academic endeavors, instilling in them a love for learning and the skills needed to excel in higher grades."
                    src={TSCSImg}
                />
            </div>
        </div>
    </motion.div>
  )
}

export default Education