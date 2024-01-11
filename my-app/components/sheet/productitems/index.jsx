import React from 'react'
import styles from './styles.module.css'

const ProductItems = () => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-7 md:my-8 my-4'>
        <span className={styles.piece}>Wire sheet</span>
        <span className={styles.piece}>Steel Rebar</span>
        <span className={styles.piece}>I-Beams</span>
        <span className={styles.piece}>Galvanized steel coil</span>
        <span className={styles.piece}>Pipes Steel wire rod</span>
        <span className={styles.piece}>Steel profile pipe</span>
        <span className={styles.piece}>Channel</span>
        <span className={styles.piece}>Steel sheet</span>
       
    </div>
  )
}

export default ProductItems;