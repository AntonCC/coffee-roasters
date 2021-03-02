import React from 'react'
import './hero-banner.scss'
import { NavLink } from 'react-router-dom'
import Button from '../button/button'

interface Props {
  title: string,
  body: string,
  btnText?: string,
  btnLink?: string 
}

const HeroBanner: React.FC<Props> = ({ title, body, btnText, btnLink}) => {
  return (
    <div className='hero-banner'>
      <div className="text">
        <h1>{ title }</h1>
        <p>{ body }</p>
        <div className="cta-btn">
          <NavLink to={btnLink!}>
            <Button>
              { btnText }
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;