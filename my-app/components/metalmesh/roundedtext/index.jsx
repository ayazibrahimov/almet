import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import CurvedImage from '@/public/CurvedImage.png'


function RoundedText() {
  return (
    <div className={styles.roundedTextContainer}>
         <Image
          src={CurvedImage}
         ></Image>
    </div>
  )
}

export default RoundedText;