import React from 'react'
import styles from './styles.module.css'

function InfoText({data}) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
       {data.home_slide_down_text}
      </p>
    </div>
  )
}

export default InfoText