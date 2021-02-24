import React, { useState, useEffect } from 'react'
import './subscription-option.scss'
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg'

interface Props {
  id: number,
  activeSectionId: number,
  setActiveSectionId: (active: number) => void,
  selectedArray: number[],
  setSelectedArray: (selected: number[]) => void, 
  title: string,
}

const SubscriptionOption: React.FC<Props> = ({ id, activeSectionId, setActiveSectionId, selectedArray, setSelectedArray, title }) => {
  const [open, setOpen] = useState(false)
  // const [prevActiveId, setPrevActiveId] = useState(0)

  const handleClick = () => {
    setActiveSectionId(id)
    if(!open) {
      setOpen(true)
      setSelectedArray([...selectedArray, id])
    } else {
      setOpen(false)
      const newArr = selectedArray.filter(selected => selected !== id)
      setSelectedArray(newArr)
      setActiveSectionId(newArr[newArr.length-1])
    }
  }

  useEffect(() => {
    console.log('Selected array', selectedArray)
  }, [activeSectionId])

  return (
    <div className='subscription-option'>
      <div className="option-bar" onClick={handleClick}>
        <h2>{ title }</h2>
        <Arrow />
      </div>
      <div className={`drop-down ${open ? 'open' : ''}`}></div>
    </div>
  )
}

export default SubscriptionOption;