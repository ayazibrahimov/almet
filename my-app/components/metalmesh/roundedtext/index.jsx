'use client'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import CurvedImage from '@/public/CurvedImage.png'


function RoundedText({data}) {
  return (
    <div className={styles.roundedTextContainer}>
        <svg width={250} height={250}>
          <path className={styles.curve}
            id='curve'
            d="M 25 125 A 95 95 0 1 1 25 127"
           ></path>
           <text className={styles.text}>
               <textPath href='#curve'>{data.home_leader_in}</textPath> 
           </text> 
        </svg> 
    </div>
  )
}

export default RoundedText;