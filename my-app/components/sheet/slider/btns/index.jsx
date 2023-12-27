'use client'
import React from 'react'
import styles from './styles.module.css'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";


const Buttons = ({index,increment,sliderDatas,decrement}) => {

  const handlePlus =()=>{
    if( !(index === 8) ){
      increment()
    }
  }
  const handleMinus =()=>{
    if( !(index === 0) ){
      decrement()
    }
  }




  return (
    <div className={styles.container}>
       <button onClick={handleMinus} className={styles.prev}><FaAngleLeft /></button>
       <button onClick={handlePlus} className={styles.next}><FaAngleRight /></button>
    </div>
  )
}

export default Buttons