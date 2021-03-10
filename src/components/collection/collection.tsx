import React from 'react'
import './collection.scss'
import ProductCard from '../../components/product-card/product-card'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

interface Props {
  collectionInfo: { name: string; description: string; img: string; }[]
}

const Collection: React.FC<Props> = ({ collectionInfo }) => {
  return (
    <motion.div 
      className='collection' 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className='title-alternate'>our collection</h1>
      {
        collectionInfo.map(item => (
          <ProductCard {...item} />
        ))
      }
    </motion.div>
  )
}

export default Collection;