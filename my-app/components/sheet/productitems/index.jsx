import React from 'react'
import styles from './styles.module.css'

const ProductItems = () => {
  return (
    <div className='flex justify-center items-center flex-wrap md:gap-7 gap-6 md:my-8 my-6'>
        <span className={styles.piece}>Wire Mesh</span>
        <span className={styles.piece}>Steel wire rod</span>
        <span className={styles.piece}>Ribbed wire rod</span>
        <span className={styles.piece}>Mesh wire fence</span>
        <span className={styles.piece}>PWC coated wire</span>
        <span className={styles.piece}>Metal wire</span>
        <span className={styles.piece}>Steel Wire Rope</span>
        <span className={styles.piece}>Steel Rebar</span>
        <span className={styles.piece}>I-Beams</span>
        <span className={styles.piece}>Galvanized steel coil</span>
        <span className={styles.piece}>Pipes Steel</span>
        <span className={styles.piece}>Steel Wire Rod</span>
        <span className={styles.piece}>Steel profile pipe</span>
        <span className={styles.piece}>Channel</span>
        <span className={styles.piece}>Steel sheet</span>
    </div>
  )
}

export default ProductItems;