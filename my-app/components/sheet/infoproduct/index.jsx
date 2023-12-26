import React from 'react'
import styles from './styles.module.css'
import AllProducts from '../allproduct'


const Products = () => {
  return (
    <div className='sm:container sm:mx-auto py-6 px-14'>
        <h2 className={styles.title}>“products”</h2>
        <AllProducts />
    </div>
  )
}

export default Products;