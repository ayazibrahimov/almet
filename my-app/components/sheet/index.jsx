import React from 'react'
import SheetImg from '@/public/metalsheet.jpg'
import Image from 'next/image'
import styles from './styles.module.css'
import DropFilter from '../dropfilter'
import Ironmensh from './ironmensh'




const Sheet = () => {
  return (
    <div>
        <div className={styles.container} style={{position:"relative",width:"100%"}}>
             <DropFilter />
             <Image 
               src={SheetImg} 
               alt="products-sheet"
               layout="fill" 
               objectFit="cover"
                />
             <Ironmensh /> 
        </div>
    </div>
  )
}

export default Sheet