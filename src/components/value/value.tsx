import React, { useState, useEffect, useContext} from 'react'
import { WidthContext } from '../../contexts/widthContext'
import './value.scss'

interface Props {
  title: string,
  body: string,
  img: string,
  imgTablet?: string,
  inverse?: boolean
}

const Value: React.FC<Props> = ({ title, body, img, imgTablet, inverse }) => {
  const [width, setWidth] = useContext(WidthContext)
  const [currentImg, setCurrentImg] = useState(img)

  useEffect(() => {
    if(width < 985 && imgTablet) {
      setCurrentImg(imgTablet!)
    } else {
      setCurrentImg(img)
    }
  }, [width])

  return (
    <div className={`value ${inverse ? 'inverse' : ''}`}>
      <div className="side-a">
        <img src={currentImg} alt="Pic"/>
      </div>
      <div className="side-b">
        <div className="text">
          <h2>{ title }</h2>
          <p>{ body }</p>
        </div>
      </div>
    </div>
  )
}

export default Value;