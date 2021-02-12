import React from 'react'
import './home.scss'
import HeroBanner from '../../components/hero-banner/hero-banner'
import Collection from '../../components/collection/collection'
import Perks from '../../components/perks/perks'
import PlanSteps from '../../components/plan-steps/plan-steps'
import { heroBannerInfo, collectionInfo, perksInfo } from './home-info'

const Home: React.FC = () => {
  return (
    <div className='home container'>
      <HeroBanner {...heroBannerInfo} />
      <Collection collectionInfo={collectionInfo} />
      <Perks perksInfo={perksInfo} />
      <PlanSteps />
    </div>
  )
}

export default Home;