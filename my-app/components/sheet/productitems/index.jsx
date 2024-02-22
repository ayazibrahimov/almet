import React from 'react'
import styles from './styles.module.css'

const ProductItems = ({data}) => {
  return (
    <div className='flex justify-center items-center flex-wrap md:gap-7 gap-6 md:my-8 my-6'>

         {
          data.map(dat=>( 
            <span className={styles.piece}>{dat.title}</span>
          ))
         }
      
    </div>
  )
}

export default ProductItems;