import React from 'react'
import './about.scss'
import Banner from '../../components/banner/banner'
import Value from '../../components/value/value'

const About: React.FC = () => {
  return (
    <div className='about container'>
      <Banner />
      <Value />
      <Value />
    </div>
  )
}

export default About;