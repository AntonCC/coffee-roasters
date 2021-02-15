import React from 'react'
import './about.scss'
import Banner from '../../components/banner/banner'
import Value from '../../components/value/value'
import Headquarters from '../../components/headquarters/headquarters'
import { bannerInfo, valueInfo } from './about-info'

const About: React.FC = () => {
  return (
    <div className='about container'>
      <Banner {...bannerInfo} />
      {
        valueInfo.map(info => (
          <Value {...info} />
        ))
      }
      <Headquarters />
    </div>
  )
}

export default About;