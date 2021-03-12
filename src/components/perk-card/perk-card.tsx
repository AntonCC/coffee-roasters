import React, { useEffect } from 'react'
import './perk-card.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 250
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.6
    }
  }
}

interface Props {
  title: string,
  description: string,
  img: string
}

const PerkCard: React.FC<Props> = ({ title, description, img}) => {
  const animation = useAnimation()
  const [viewRef, inView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if(inView) {
      animation.start('visible')
    }
  }, [inView])

  return (
    <motion.div
      ref={viewRef} 
      className='perk-card'
      variants={cardVariants}
      initial='hidden'
      animate={animation}
    >
      <div className="img">
        <img src={ img } alt="Bean"/>
      </div>
      <div className="text">
        <h4 className="title">{ title }</h4>
        <p className="description">{ description }</p>
      </div>
    </motion.div>
  )
}

export default PerkCard;