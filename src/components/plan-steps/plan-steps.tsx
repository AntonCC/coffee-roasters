import React from 'react'
import './plan-steps.scss'
import Button from '../button/button'

const PlanSteps: React.FC = () => {
  return (
    <div className='plan-steps'>
      <h4 className="title">How it works</h4>
      <div className="steps">
        <div className="line"></div>
        <div className="step">
          <div className="text">
            <h1>01</h1>
            <h3>Pick your <br/>coffee</h3>
            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
          </div>
        </div>
        <div className="step">
          <div className="text">
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
          </div>
        </div>
        <div className="step">
          <div className="text">
            <h1>03</h1>
            <h3>Recieve and enjoy!</h3>
            <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
          </div>
        </div>
      </div>
      <div className="cta-btn">
        <Button>
          Create a plan
        </Button>
      </div>
    </div>
  )
}

export default PlanSteps;