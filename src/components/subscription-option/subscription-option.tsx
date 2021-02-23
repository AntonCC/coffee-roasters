import React from 'react'
import './subscription-option.scss'
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg'

interface Props {
  title: string
}

const SubscriptionOption: React.FC<Props> = ({ title }) => {
  return (
    <div className='subscription-option'>
      <div className="option-bar">
        <h2>{ title }</h2>
        <Arrow />
      </div>
    </div>
  )
}

export default SubscriptionOption;