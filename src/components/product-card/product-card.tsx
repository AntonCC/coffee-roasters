import React from 'react'
import './product-card.scss'
import Coffee from '../../assets/home/desktop/image-gran-espresso.png'

const ProductCard: React.FC = () => {
  return (
    <div className='product-card'>
      <div className="img">
        <img src={Coffee} alt="Coffee"/>
      </div>
      <h3>Gran Espersso</h3>
      <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
    </div>
  )
}

export default ProductCard;