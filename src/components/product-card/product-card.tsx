import React from 'react'
import './product-card.scss'

interface Props {
  name: string,
  description: string,
  img: string
}

const ProductCard: React.FC<Props> = ({ name, description, img}) => {
  return (
    <div className='product-card'>
      <div className="img">
        <img src={ img } alt="Coffee"/>
      </div>
      <h3>{ name }</h3>
      <p>{ description }</p>
    </div>
  )
}

export default ProductCard;