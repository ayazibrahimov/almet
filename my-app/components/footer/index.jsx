import React from 'react'
import styles from './styles.module.css'
import Upper from './footerUpper'
import Above from './footerAbove'




function index() {
  return (
    <footer className={styles.footer} style={{backgroundColor:'#000'}}>
       <Upper />
       <Above />
    </footer>
  )
}

export default index