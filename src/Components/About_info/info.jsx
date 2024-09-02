import React from 'react'
import { motion } from 'framer-motion'

const info = ({heading,desp,childVarient}) => {
  return (
    <motion.div
      variants={childVarient}
    className='space-y-3 hover:scale-110 transition-all duration-500'>
            <h1 className='bg-gradient-to-r from-30% text-center bg-clip-text from-orange-500 to-50% to-pink-900 text-5xl font-semibold text-transparent '>{heading}</h1>
            <p className='text-white text-lg text-center'>{desp}</p>
    </motion.div>
  )
}

export default info 