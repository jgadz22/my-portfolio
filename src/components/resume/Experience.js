import React from 'react'
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
    > 
      <div>Experience</div>
    </motion.div>
  )
}

export default Experience