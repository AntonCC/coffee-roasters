import React from 'react'
import './perk-card.scss'

interface Props {
  title: string,
  description: string,
  img: string
}

const PerkCard: React.FC<Props> = ({ title, description, img}) => {
  return (
    <div className='perk-card'>
      <div className="img">
        <img src={ img } alt="Bean"/>
      </div>
      <h4 className="title">{ title }</h4>
      <p className="description">{ description }</p>
    </div>
  )
}

export default PerkCard;