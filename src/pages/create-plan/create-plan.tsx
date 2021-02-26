import React, { useState } from 'react'
import './create-plan.scss'
import Banner from '../../components/banner/banner'
import PlanSteps from '../../components/plan-steps/plan-steps'
import SubscriptionOptions from '../../components/subscription-options/subscription-options'
import OrderSummaryModal from '../../components/order-summary-modal/order-summary-modal'
import { bannerInfo } from './create-plan-info'

const CreatePlan: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<Array<{id: number, optionTitle: string}>>([])

  return (
    <div className='create-plan container'>
      <Banner {...bannerInfo} />
      <PlanSteps inverse />
      <SubscriptionOptions 
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      {
        openModal
          ? <OrderSummaryModal />
          : ''
      }
    </div>
  )
}

export default CreatePlan;