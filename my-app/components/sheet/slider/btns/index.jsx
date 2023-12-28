'use client'
import React from 'react'
import styles from './styles.module.css'
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";


const Buttons = ({index,increment,sliderDatas,decrement}) => {

  const handlePlus =()=>{
    if( !(index === sliderDatas.length-1) ){
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
       <button disabled={index === 0 } style={index !== 0 ? {background:'rgba(218, 165, 32, 0.50'} : {} } onClick={handleMinus} className={styles.prev}><FaAngleLeft style={{ color: 'white' }} /></button>
       <button disabled={index === sliderDatas.length-1 } style={index < sliderDatas.length-1 ? {background:'rgba(218, 165, 32, 0.50'} : {} } onClick={handlePlus} className={styles.next}><FaAngleRight style={{ color: 'white' }} /></button>
    </div>
  )
}

export default Buttons