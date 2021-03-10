import React from 'react'
import './hero-banner.scss'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../button/button'

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 100
  }, 
  visible: {
    opacity: 1,
    y: 0
  }
}

interface Props {
  title: string,
  body: string,
  btnText?: string,
  btnLink?: string 
}

const HeroBanner: React.FC<Props> = ({ title, body, btnText, btnLink}) => {
  return (
    <motion.div className='hero-banner'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text">
        <motion.h1 variants={textVariants}>{ title }</motion.h1>
        <motion.p variants={textVariants}>{ body }</motion.p>
        <motion.div className="cta-btn" variants={textVariants}>
          <NavLink to={btnLink!}>
            <Button>
              { btnText }
            </Button>
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroBanner;