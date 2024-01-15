import React from 'react'
import styles from './styles.module.css'

const Info = ({index,sliderDatas}) => {
  return (
    <div className= {`${styles.container}`} >
        <h4 className={styles.title}>{sliderDatas[index]?.title}</h4>
        <p className={styles.paragraph}>{sliderDatas[index]?.text}</p>
    </div>
  )
}

export default Info