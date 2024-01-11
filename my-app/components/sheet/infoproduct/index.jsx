import React from 'react'
import styles from './styles.module.css'
import AllProducts from '../allproduct'


const Products = () => {
  return (
    <div className='lg:container lg:mx-auto lg:px-14 px-8 py-6'>
        <h2 className={styles.title}>“products”</h2>
        <AllProducts />
    </div>
  )
}

export default Products;