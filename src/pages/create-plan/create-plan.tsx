import React, { useState } from 'react'
import './create-plan.scss'
import Banner from '../../components/banner/banner'
import PlanSteps from '../../components/plan-steps/plan-steps'
import SubscriptionOptions from '../../components/subscription-options/subscription-options'
import OrderSummaryModal from '../../components/order-summary-modal/order-summary-modal'
import PaymentModal from '../../components/payment-modal/payment-modal'
import { bannerInfo } from './create-plan-info'

const CreatePlan: React.FC = () => {
  const [openModal, setOpenModal] = useState({ orderSummary: false, payment: false })
  const [selectedOptions, setSelectedOptions] = useState<Array<{id: number, optionTitle: string, price?: number}>>([])
  const [orderTotal, setOrderTotal] = useState(0)
  // For adding trailing zeros when displaying price
  const [orderTotalString, setOrderTotalString] = useState('')

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
        openModal.orderSummary
          ? <OrderSummaryModal 
              selectedOptions={selectedOptions}
              openModal={openModal} 
              setOpenModal={setOpenModal}
              orderTotal={orderTotal}
              setOrderTotal={setOrderTotal} 
              orderTotalString={orderTotalString}
              setOrderTotalString={setOrderTotalString}
            />
          : ''
      }
      {
        openModal.payment
          ? <PaymentModal 
              setOpenModal={setOpenModal}
              orderTotal={orderTotal}
              orderTotalString={orderTotalString}
              setSelectedOptions={setSelectedOptions}
            />
          : ''
      }
    </div>
  )
}

export default CreatePlan;