import React, { useState, useEffect } from 'react'
import './order-summary.scss'
import OrderText from '../order-text/order-text'
import Button from '../button/button'

interface Props {
  selectedOptions: Array<{id: number, optionTitle: string}>,
  openModal: boolean,
  setOpenModal: (open: boolean) => void
}

const OrderSummary: React.FC<Props> = ({ selectedOptions, openModal, setOpenModal }) => {
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(selectedOptions.length === 5) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [selectedOptions])

  const handleClick = () => {
    if(selectedOptions.length === 5) {
      setOpenModal(true)
    }
  }

  return (
    <div className='order-summary'>
      <div className="order-info">
        <p className='title'>Order Summary</p>
        <h4>
          "I drink my coffee as 
          <OrderText id={1} selectedOptions={selectedOptions} />, with a 
          <OrderText id={2} selectedOptions={selectedOptions} /> type of bean. 
          <OrderText id={3} selectedOptions={selectedOptions} /> ground ala 
          <OrderText id={4} selectedOptions={selectedOptions} />, sent to me 
          <OrderText id={5} selectedOptions={selectedOptions} />."
        </h4>
      </div>
      <div className="cta-btn" onClick={handleClick}>
        <Button disabled={disabled}>
          Create My Plan!
        </Button>
      </div>
    </div>
  )
}

export default OrderSummary;