import React from 'react'
import './headquarters.scss'
import { ReactComponent as UK } from '../../assets/about/desktop/illustration-uk.svg'
import { ReactComponent as Canada } from '../../assets/about/desktop/illustration-canada.svg'
import { ReactComponent as Australia } from '../../assets/about/desktop/illustration-australia.svg'

const Headquarters = () => {
  return (
    <div className='headquarters'>
      <h4 className="title">Our Headquarters</h4>
      <div className="headquarters-cards">
        <div className="card">
          <UK />
          <h3 className="area">United Kingdom</h3>
          <div className="address">
            <p>68  Asfordby Rd</p>
            <p>Alcaston</p>
            <p>SY6 1YA</p>
            <p>+44 1241 918425</p>
          </div>
        </div>
        <div className="card">
          <Canada />
          <h3 className="area">Canada</h3>
          <div className="address">
            <p>1528  Eglinton Avenue</p>
            <p>Toronto</p>
            <p>Ontario M4P 1A6</p>
            <p>+1 416 485 2997</p>
          </div>
        </div>
        <div className="card">
          <Australia />
          <h3 className="area">Australia</h3>
          <div className="address">
            <p>36 Swanston Street</p>
            <p>Kewell</p>
            <p>Victoria</p>
            <p>+61 4 9928 3629</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Headquarters;