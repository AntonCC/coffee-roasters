import React, { useState, useEffect } from 'react'
import './order-text.scss'

interface Props {
  id: number,
  selectedOptions: Array<{id: number, optionTitle: string}>
}

const OrderText: React.FC<Props> = ({ id, selectedOptions}) => {
  const [showText, setShowText] = useState('')

  useEffect(() => {
    selectedOptions.forEach(option => {
      if(option.id === id) {
        setShowText(option.optionTitle)
      }
    })
  }, [selectedOptions])

  return (
    <>
      <span className='order-text'>
        {
          showText
            ? ` ${showText} `
            : ` ____ `
        }
      </span>
    </>
  )
}

export default OrderText;