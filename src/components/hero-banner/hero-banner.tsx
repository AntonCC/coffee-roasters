import React from 'react'
import './hero-banner.scss'
import Button from '../button/button'
import Hero from '../../assets/home/desktop/image-hero-coffeepress.jpg'

interface Props {
  title: string,
  body: string,
  btnText?: string
}

const HeroBanner: React.FC<Props> = ({ title, body, btnText}) => {
  return (
    <div className='hero-banner' style={{ background: `url(${Hero})` }}>
      <div className="text">
        <h1>{ title }</h1>
        <p>{ body }</p>
        <Button>
          { btnText }
        </Button>
      </div>
    </div>
  )
}

export default HeroBanner;