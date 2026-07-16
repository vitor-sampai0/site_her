import React from 'react'
import { motion } from 'framer-motion'
import './GlassCard.css'

export default function GlassCard({children, className=''}){
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
    >
      {children}
    </motion.div>
  )
}
