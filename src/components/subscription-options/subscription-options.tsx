import React, { useState, useEffect } from 'react'
import './subscription-options.scss'
import SubscriptionOption from '../subscription-option/subscription-option'
import SubscriptionSection from '../subscription-section/subscription-section'
import { subscriptionSectionInfo, subscriptionOptionInfo } from '../../pages/create-plan/create-plan-info'

const SubscriptionOptions: React.FC = () => {
  return (
    <div className='subscription-options'>
      <div className="section">
        {
          subscriptionSectionInfo.map(info => (
            <SubscriptionSection {...info} />
          ))
        }
      </div>
      <div className="options">
        {
          subscriptionOptionInfo.map(info => (
            <SubscriptionOption {...info} />
          ))
        }
      </div>
    </div>
  )
}

export default SubscriptionOptions;