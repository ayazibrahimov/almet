import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const ProductItems = ({data}) => {

  return (
    <div className='flex justify-center items-center flex-wrap md:gap-7 gap-6 md:my-8 my-6'>

         {
          data?.map(dat=>( 
            <span className={styles.piece}><Link href={`/products/${dat.id}`}>{dat.title}</Link></span>
          ))
         }
      
    </div>
  )
}

export default ProductItems;