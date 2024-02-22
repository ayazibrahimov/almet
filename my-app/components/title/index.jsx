import React from 'react'
import styles from './styles.module.css'

const Title = ({title}) => {
  console.log(title);
  return <h2 className={styles.title}>{title}</h2>
}

export default Title