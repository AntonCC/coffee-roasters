import React, { useState, useEffect } from 'react'
import './subscription-options.scss'
import SubscriptionOption from '../subscription-option/subscription-option'
import SubscriptionSection from '../subscription-section/subscription-section'
import OrderSummary from '../order-summary/order-summary'
import { subscriptionSectionInfo, subscriptionOptionInfo } from '../../pages/create-plan/create-plan-info'

const SubscriptionOptions: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState(1)
  const [selectedArray, setSelectedArray] = useState([1])

  return (
    <div className='subscription-options'>
      <div className="section">
        {
          subscriptionSectionInfo.map(info => (
            <SubscriptionSection 
              key={info.id} 
              activeSectionId={activeSectionId} 
              setActiveSectionId={setActiveSectionId} 
              {...info} 
            />
          ))
        }
      </div>
      <div className="options">
        {
          subscriptionOptionInfo.map(info => (
            <SubscriptionOption 
              key={info.id} 
              activeSectionId={activeSectionId} 
              setActiveSectionId={setActiveSectionId}
              selectedArray={selectedArray}
              setSelectedArray={setSelectedArray} 
              {...info} 
            />
          ))
        }
        <OrderSummary />
      </div>
    </div>
  )
}

export default SubscriptionOptions;