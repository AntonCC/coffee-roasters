import React from 'react'
import './home.scss'
import HeroBanner from '../../components/hero-banner/hero-banner'
import Collection from '../../components/collection/collection'
import { heroBannerInfo } from './home-info'

const Home: React.FC = () => {
  return (
    <div className='home container'>
      <HeroBanner {...heroBannerInfo} />
      <Collection />
    </div>
  )
}

export default Home;