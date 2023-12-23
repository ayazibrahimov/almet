import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700', 
    subsets: ['latin'] })

const Content = ({metal}) => {
  return (
    <div className={styles.content}>
        <h2 className='roboto text-center'>{metal.heading}:</h2>
        <h3 className='roboto text-center mt-2'>{metal.title}</h3>
        <p className='text-center mt-4'>{metal.text}</p>
         <div className='mt-4'>
         <Link href='/' className={styles.buttonData}>
            More
         </Link> 
         </div>

    </div>
  )
}

export default Content