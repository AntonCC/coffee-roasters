import React from 'react'
import './value.scss'
import Pic from '../../assets/about/desktop/image-commitment.jpg'

interface Props {
  title: string,
  body: string,
  img: string,
  inverse?: boolean
}

const Value: React.FC<Props> = ({ title, body, img, inverse }) => {
  return (
    <div className={`value ${inverse ? 'inverse' : ''}`}>
      <div className="side-a">
        <img src={img} alt="Pic"/>
      </div>
      <div className="side-b">
        <div className="text">
          <h2>{ title }</h2>
          <p>{ body }</p>
        </div>
      </div>
    </div>
  )
}

export default Value;