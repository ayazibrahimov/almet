import React from 'react'
import styles from './styles.module.css'
import Upper from './footerUpper'
import Above from './footerAbove'
import FixedButton from '@/components/upButton'




function index() {
  return (
    <footer className={styles.footer} style={{backgroundColor:'#000'}}>
       <Upper />
       <Above />
       <FixedButton />
    </footer>
  )
}

export default index