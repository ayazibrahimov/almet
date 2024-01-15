import React from 'react'
import styles from './styles.module.css'
import Item from '../item'
import {Tables} from '@/mocks/table'

const Types = () => {
  return (
     <div className='lg:container lg:mx-auto lg:px-14 px-8 py-6'>
        <div className={styles.container}>
            <h3 className={styles.title}>“Almet Baku” OJSC company produces two types of metal mesh:</h3>
            <Item tables={Tables} />
        </div>
     </div>
  )
}

export default Types