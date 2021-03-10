import React, { useState, useEffect } from 'react'
import './select-option.scss'

interface Props {
  optionsId: number,
  selectedOptions: Array<{id: number, optionTitle: string, price?: number}>,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string, price?: number}> ) => void,
  selectedArray: number[],
  setSelectedArray: (selected: number[]) => void,
  setActiveSectionId: (active: number) => void
  optionTitle: string,
  optionBody: string,
  price?: number,
}

const SelectOption: React.FC<Props> = ({ 
    optionsId, 
    selectedOptions, 
    setSelectedOptions,
    selectedArray,
    setSelectedArray, 
    setActiveSectionId, 
    optionTitle, 
    optionBody, 
    price 
  }) => {
  const [active, setActive] = useState(false)

  // If option not in selected options add it
  // Otherwise replace old option with new one
  const handleClick = () => {
    const foundOption = selectedOptions.find(options => options.id === optionsId)

    if(!foundOption) {
      setSelectedOptions([...selectedOptions, {id: optionsId, optionTitle: optionTitle, price: price }])
      if(optionsId < 5) {
        setSelectedArray([...selectedArray, optionsId + 1])
        setActiveSectionId(optionsId + 1)
      }
    } else {
      const newSelectedOptions = selectedOptions.filter(options => options.id !== optionsId)
      setSelectedOptions([...newSelectedOptions, {id: optionsId, optionTitle: optionTitle, price: price}])
    }

  }
  // If option selected give it active state
  useEffect(() => {
    const foundOption = selectedOptions.find(options => options.id === optionsId)
    if(foundOption?.optionTitle === optionTitle) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [selectedOptions])

  return (
    <div className={`select-option ${active ? 'active' : ''}`} onClick={handleClick}>
      <h4>{ optionTitle }</h4>
      <p>{ optionBody }</p>
    </div>
  )
}

export default SelectOption;