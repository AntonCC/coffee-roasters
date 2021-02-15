import React from 'react'
import './banner.scss'

interface Props {
  title: string,
  body: string
}

const Banner: React.FC<Props> = ({ title, body }) => {
  return (
    <div className='banner'>
      <div className="text">
        <h2>{ title }</h2>
        <p>{ body }</p>
      </div>
    </div>
  )
}

export default Banner;