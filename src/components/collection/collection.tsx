import React from 'react'
import './collection.scss'
import ProductCard from '../../components/product-card/product-card'

const Collection: React.FC = () => {
  return (
    <div className='collection'>
      <h1 className='title-alternate'>our collection</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default Collection;