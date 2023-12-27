import React from 'react'
import styles from './styles.module.css'

const Timeline = () => {
   
  const active = {
    transform: 'scale(1.4)',
    backgroundColor: '#DAA520',
    fontSize: '16px',
  }


  return (
    <div className={styles.container}>

      <span style={active} className={styles.box} >1</span>
      <span className={styles.box}>2</span>
      <span className={styles.box}>3</span>
      <span className={styles.box}>4</span>
      <span className={styles.box}>5</span>
      <span className={styles.box}>6</span>
      <span className={styles.box}>7</span>
      <span className={styles.box}>8</span>
      <span className={styles.box}>9</span>

    </div>
  )
}

export default Timeline;