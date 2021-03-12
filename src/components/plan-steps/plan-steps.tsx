import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './plan-steps.scss'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Button from '../button/button'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.75
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

interface Props {
  inverse?: boolean
}

const PlanSteps: React.FC<Props> = ({ inverse }) => {
  const animation = useAnimation()
  const [viewRef, inView] = useInView()

  useEffect(() => {
    if(inView) {
      animation.start('visible')
    }
  }, [inView])

  return (
    <div className={`plan-steps ${inverse ? 'inverse' : ''}`}>
      {
        inverse 
          ? ''
          : (
            <h4 className="title">How it works</h4>
          )
      }
      <motion.div 
        ref={viewRef}
        className="steps"
        variants={containerVariants}
        initial='hidden'
        animate={animation}
      >
        <div className="line"></div>
        <motion.div className="step"
          variants={childVariants}
        >
          <div className="text">
            <h1>01</h1>
            <h3>Pick your <br/>coffee</h3>
            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
          </div>
        </motion.div>
        <motion.div className="step"
          variants={childVariants}
        >
          <div className="text">
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
          </div>
        </motion.div>
        <motion.div className="step"
          variants={childVariants}
        >
          <div className="text">
            <h1>03</h1>
            <h3>Recieve and enjoy!</h3>
            <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
          </div>
        </motion.div>
      </motion.div>
      {
        inverse
          ? ''
          : (
            <div className="cta-btn">
              <NavLink to='/create-plan'>
                <Button>
                  Create a plan
                </Button>
              </NavLink>
            </div>
          )
      }
    </div>
  )
}

export default PlanSteps;