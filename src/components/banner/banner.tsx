import React from 'react'
import './banner.scss'

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <div className="text">
        <h2>About Us</h2>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
        </p>
      </div>
    </div>
  )
}

export default Banner;