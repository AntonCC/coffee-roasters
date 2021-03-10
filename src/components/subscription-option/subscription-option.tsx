import React, { useState, useEffect } from 'react'
import './subscription-option.scss'
import SelectOption from '../select-option/select-option'
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg'

interface Props {
  id: number,
  activeSectionId: number,
  setActiveSectionId: (active: number) => void,
  selectedArray: number[],
  setSelectedArray: (selected: number[]) => void,
  selectedOptions: Array<{id: number, optionTitle: string, price?: number}>,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string, price?: number}> ) => void, 
  title: string,
  options: { optionTitle: string, optionBody: string, price?: number }[]
}

const SubscriptionOption: React.FC<Props> = ({ 
    id, 
    activeSectionId, 
    setActiveSectionId, 
    selectedArray, 
    setSelectedArray,
    selectedOptions,
    setSelectedOptions, 
    title, 
    options 
  }) => {
  const [open, setOpen] = useState(false)
  

  // If option is closed open it. Then add that option to selected array
  // If option is open close it. Then remove it from selected array.
  // Selected array exists so section highlighting can jump back to previously selected item, when current selected item closes. 
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
    if(activeSectionId === id) {
      setOpen(true)
    }
  }, [activeSectionId])

  return (
    <div className='subscription-option'>
      <div className={`option-bar ${open ? 'open' : ''}`} onClick={handleClick}>
        <h2>{ title }</h2>
        <Arrow />
      </div>
      <div className={`drop-down ${open ? 'open' : ''}`}>
        {
          options.map(info => (
            <SelectOption 
              optionsId={id} 
              selectedOptions={selectedOptions} 
              setSelectedOptions={setSelectedOptions}
              selectedArray={selectedArray}
              setSelectedArray={setSelectedArray}
              setActiveSectionId={setActiveSectionId} 
              {...info} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default SubscriptionOption;