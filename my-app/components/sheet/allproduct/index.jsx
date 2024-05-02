import React from 'react'
import styles from './styles.module.css'
import ProductItems from '../productitems'


const AllProducts = ({data,title}) => {
  return (
    <div className={styles.container}>
        <div className={styles.major}>
            <h4 className={styles.title}>
                <span className={styles.text}>{title?.data?.products_data_title_name}</span>
            </h4>
            <ProductItems data={data} />
        </div>
    </div>
  )
}

export default AllProducts