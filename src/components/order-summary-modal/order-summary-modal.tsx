import React, { useState, useEffect } from 'react'
import './order-summary-modal.scss'
import { motion, AnimatePresence } from 'framer-motion'
import OrderText from '../order-text/order-text'
import Button from '../button/button'
import { ReactComponent as X } from '../../assets/shared/mobile/times-solid.svg'

const modalVariants = {
  hidden: {
    opacity: 0,
    top: 0
  },
  visible: {
    opacity: 1,
    top: '50%',
    transition: {
      type: 'spring',
      mass: 0.7
    }
  }
}

interface Props {
  selectedOptions: Array<{id: number, optionTitle: string, price?: number}>,
  openModal: { orderSummary: boolean, payment: boolean },
  setOpenModal: (open: {orderSummary: boolean, payment: boolean}) => void,
  orderTotal: number,
  setOrderTotal: (amount: number) => void,
  orderTotalString: string,
  setOrderTotalString: (amount: string) => void
}

const OrderSummaryModal: React.FC<Props> = (
  { 
    selectedOptions, 
    openModal, 
    setOpenModal, 
    orderTotal, 
    setOrderTotal, 
    orderTotalString,
    setOrderTotalString
  }) => {

  // Close modal when background is clicked
  const closeAllModals = () => {
    setOpenModal({ orderSummary: false, payment: false })
  }

  // Close order summary, open payment modal
  const handleCtaClick = () => {
    setOpenModal({ orderSummary: false, payment: true })
  }

  useEffect(() => {
    let total = 0
    // Option 3 and 5 are only ones that effect price
    for(const option of selectedOptions) {
      if(option.id === 3 || option.id === 5) {
        total += option.price!
      }
    }
    // Converting total to string and adding trailing zeros if needed
    // eg: 14.6 --> 14.60 
    const centsStr = total.toString().split('.')
    
    if(centsStr.length === 1) {
      setOrderTotalString(total.toString() + '.00')
    } else if(centsStr[1].length === 1) {
      setOrderTotalString(total.toString() + '0')
    } else {
      setOrderTotalString(total.toString())
    }

    setOrderTotal(total)
  }, [selectedOptions])

  return (
    <div className='order-summary-modal'>
      <div className="dark-background" onClick={closeAllModals}></div>
        <motion.div 
          className='order'
          variants={modalVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="title">
            <h2>Order Summary</h2>
            <div className="close" onClick={closeAllModals}>
              <X />
            </div>
          </div>
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
              <h3>${ orderTotalString }/mo</h3>
              <Button handleClick={handleCtaClick}>
                Checkout
              </Button>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default OrderSummaryModal;