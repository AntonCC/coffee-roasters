import React from 'react'
import './perks.scss'
import { motion } from 'framer-motion'
import PerkCard from '../perk-card/perk-card'

interface Props {
  perksInfo: { title: string; description: string; img: string; }[]
}

const Perks: React.FC<Props> = ({ perksInfo }) => {
  return (
    <div className='perks'>
      <div className="text">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="perk-cards">
        {
          perksInfo.map(item => (
            <PerkCard {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Perks;