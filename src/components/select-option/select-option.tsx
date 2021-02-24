import React, { useState, useEffect } from 'react'
import './select-option.scss'

interface Props {
  optionsId: number,
  selectedOptions: Array<{id: number, optionTitle: string}>,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string}> ) => void,
  optionTitle: string,
  optionBody: string
}

const SelectOption: React.FC<Props> = ({ optionsId, selectedOptions, setSelectedOptions, optionTitle, optionBody }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    if(!active) {
      setActive(true)
      setSelectedOptions([...selectedOptions, {id: optionsId, optionTitle: optionTitle}])
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    
  }, [selectedOptions])

  return (
    <div className={`select-option ${active ? 'active' : ''}`} onClick={handleClick}>
      <h4>{ optionTitle }</h4>
      <p>{ optionBody }</p>
    </div>
  )
}

export default SelectOption;