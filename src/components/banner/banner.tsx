import React, { useState, useEffect, useContext } from 'react'
import { WidthContext } from '../../contexts/widthContext'
import { motion } from 'framer-motion'
import './banner.scss'

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

interface Props {
  title: string,
  largerTitle?: boolean,
  body: string,
  backgroundImg: string,
  backgroundImgTablet?: string,
  backgroundImgMobile?: string
}

const Banner: React.FC<Props> = ({ title, largerTitle, body, backgroundImg, backgroundImgMobile }) => {
  const [width, setWidth] = useContext(WidthContext)
  const [img, setImg] = useState(backgroundImg)

  useEffect(() => {
    if(width <= 700) {
      setImg(backgroundImgMobile!)
    } else {
      setImg(backgroundImg)
    }
  }, [width])

  return (
    <div 
      className='banner'
      style={{ background: `linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.3)), url('${img}') no-repeat center/cover`}}
    >
      <motion.div className="text"
        variants={containerVariants}
        animate='visible'
      >
        <motion.h2 
          className={largerTitle ? 'larger' : ''}
          variants={textVariants}
          initial='hidden'
        >
          { title }
        </motion.h2>
        <motion.p
          variants={textVariants}
          initial='hidden'
        >
          { body }
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Banner;