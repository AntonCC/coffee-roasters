import React, { useState, useEffect } from 'react'
import './order-summary.scss'
import OrderText from '../order-text/order-text'
import Button from '../button/button'

interface Props {
  selectedOptions: Array<{id: number, optionTitle: string}>
}

const OrderSummary: React.FC<Props> = ({ selectedOptions }) => {
  const [optionIds, setOptionIds] = useState<Array<number | undefined>>([])

  useEffect(() => {
    // const arr: number[] | undefined = []
    // selectedOptions.forEach(option => {
    //   arr.push(option.id)
    // })
    // setOptionIds(arr)
  }, [selectedOptions])

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
      <div className="cta-btn">
        <Button>
          Create My Plan!
        </Button>
      </div>
    </div>
  )
}

export default OrderSummary;