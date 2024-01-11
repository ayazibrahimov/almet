import React from 'react'
import styles from './styles.module.css'
import { Roboto } from 'next/font/google'
import ToProducts from '../toproducts'


const roboto1 = Roboto({
  weight: '400', 
  subsets: ['latin'] })

const roboto2 = Roboto({
  weight: '300', 
  subsets: ['latin'] })



const TitleAbove = ({text}) => {

// {/* <span className={`${styles.leftAdd} roboto2`}>product</span> range */}
// const infoText = text.slice(-1,1)
// console.log(info);

  
  return (
    <div className='flex justify-between align-middle my-4 sm:gap-6'>
        <h4 className={`${styles.left} robot1 mt-2.5 w-3/5`}>{text}</h4>
        <ToProducts info='All products' />
    </div>
  )
}

export default TitleAbove;