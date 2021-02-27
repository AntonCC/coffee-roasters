import React from 'react'
import './order-summary-modal.scss'
import OrderText from '../order-text/order-text'
import Button from '../button/button'

interface Props {
  selectedOptions: Array<{id: number, optionTitle: string}>,
  openModal: { orderSummary: boolean, payment: boolean },
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void
}

const OrderSummaryModal: React.FC<Props> = ({ selectedOptions, openModal, setOpenModal }) => {
  // Close modal when bacckground is clicked
  const handleBackgroundClick = () => {
    setOpenModal({ orderSummary: false, payment: false })
  }

  // Close order summary open payment modal
  const handleCtaClick = () => {
    setOpenModal({ orderSummary: false, payment: true })
  }

  return (
    <div className='order-summary-modal'>
      <div className="dark-background" onClick={handleBackgroundClick}></div>
      <div className='order'>
        <h2 className="title">Order Summary</h2>
        <div className="body-wrap">
          <h4>
            "I drink my coffee as 
            <OrderText id={1} selectedOptions={selectedOptions} />, with a 
            <OrderText id={2} selectedOptions={selectedOptions} /> type of bean. 
            <OrderText id={3} selectedOptions={selectedOptions} /> ground ala 
            <OrderText id={4} selectedOptions={selectedOptions} />, sent to me 
            <OrderText id={5} selectedOptions={selectedOptions} />."
          </h4>
          <p>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
          </p>
          <div className="cta">
            <h3>$14.00/mo</h3>
            <Button handleClick={handleCtaClick}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryModal;