import React, { useState, useEffect } from 'react'
import './subscription-options.scss'
import SubscriptionOption from '../subscription-option/subscription-option'
import SubscriptionSection from '../subscription-section/subscription-section'
import OrderSummary from '../order-summary/order-summary'
import { subscriptionSectionInfo, subscriptionOptionInfo } from '../../pages/create-plan/create-plan-info'

interface Props {
  openModal: { orderSummary: boolean, payment: boolean },
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void,
  selectedOptions: Array<{id: number, optionTitle: string, price?: number}>,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string, price?: number}> ) => void, 
}

const SubscriptionOptions: React.FC<Props> = ({ openModal, setOpenModal, selectedOptions, setSelectedOptions }) => {
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
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              {...info} 
            />
          ))
        }
        <OrderSummary 
          selectedOptions={selectedOptions}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  )
}

export default SubscriptionOptions;