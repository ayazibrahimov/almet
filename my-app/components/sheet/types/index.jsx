import React from 'react'
import styles from './styles.module.css'
import Item from '../item'
import {Tables} from '@/mocks/table'

const Types = () => {
  return (
     <div className='sm:container sm:mx-auto py-6 px-14'>
        <div className={styles.container}>
            <h3 className={styles.title}>“Almet Trading Baku” company produces two types of metal mesh:</h3>
            <Item tables={Tables} />
        </div>
     </div>
  )
}

export default Types