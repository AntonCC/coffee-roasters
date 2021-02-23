import React, { useState, useEffect, useContext } from 'react'
import { WidthContext } from '../../contexts/widthContext'
import './banner.scss'

interface Props {
  title: string,
  largerTitle?: boolean,
  body: string,
  backgroundImg: string,
  backgroundImgTablet?: string,
  backgroundImgMobile?: string
}

const Banner: React.FC<Props> = ({ title, largerTitle, body, backgroundImg, backgroundImgMobile }) => {
  const [width, setWidth] = useContext(WidthContext)
  const [img, setImg] = useState(backgroundImg)

  useEffect(() => {
    if(width <= 700) {
      setImg(backgroundImgMobile!)
    } else {
      setImg(backgroundImg)
    }
  }, [width])

  return (
    <div 
      className='banner'
      style={{ background: `linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.3)), url('${img}') no-repeat center/cover`}}
    >
      <div className="text">
        <h2 className={largerTitle ? 'larger' : ''}>{ title }</h2>
        <p>{ body }</p>
      </div>
    </div>
  )
}

export default Banner;