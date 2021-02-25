import React, { useState, useEffect } from 'react'
import './order-summary.scss'
import Button from '../button/button'

interface Props {
  selectedOptions: Array<{id: number, optionTitle: string}>
}

const OrderSummary: React.FC<Props> = ({ selectedOptions }) => {
  const [optionIds, setOptionIds] = useState<Array<number | undefined>>([])

  useEffect(() => {
    const arr: number[] | undefined = []
    selectedOptions.forEach(option => {
      arr.push(option.id)
    })
    setOptionIds(arr)
    console.log('Option ids: ', optionIds)
  }, [selectedOptions])

  return (
    <div className='order-summary'>
      <div className="order-info">
        <p className='title'>Order Summary</p>
        <h4>
          "I drink my coffee as 
          <span>____</span>, with a 
          <span>____</span> type of bean. 
          <span>____</span> ground ala 
          <span>____</span>, sent to me 
          <span>____</span>."
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