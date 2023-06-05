import React from 'react'
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
    > 
      <div>Achievements</div>
    </motion.div>
  )
}

export default Achievements