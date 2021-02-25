import React from 'react'
import './create-plan.scss'
import Banner from '../../components/banner/banner'
import PlanSteps from '../../components/plan-steps/plan-steps'
import SubscriptionOptions from '../../components/subscription-options/subscription-options'
import OrderSummaryModal from '../../components/order-summary-modal/order-summary-modal'
import { bannerInfo } from './create-plan-info'

const CreatePlan: React.FC = () => {
  return (
    <div className='create-plan container'>
      <Banner {...bannerInfo} />
      <PlanSteps inverse />
      <SubscriptionOptions />
      <OrderSummaryModal />
    </div>
  )
}

export default CreatePlan;