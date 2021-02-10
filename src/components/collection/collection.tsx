import React from 'react'
import './collection.scss'
import ProductCard from '../../components/product-card/product-card'

interface Props {
  collectionInfo: { name: string; description: string; img: string; }[]
}

const Collection: React.FC<Props> = ({ collectionInfo }) => {
  return (
    <div className='collection'>
      <h1 className='title-alternate'>our collection</h1>
      {
        collectionInfo.map(item => (
          <ProductCard {...item} />
        ))
      }
    </div>
  )
}

export default Collection;