import React from 'react'
import SheetImg from '@/public/metalsheet.png'
import Image from 'next/image'
import DropFiler from '@/components/dropfilter'
import styles from './styles.module.css'
import DropFilter from '../dropfilter'
import Ironmensh from './ironmensh'



const Sheet = () => {
  return (
    <div>
        <div style={{position:"relative",width:"100%",height:'800px' }}>
             <DropFilter />
             <Image 
               src={SheetImg} 
               alt="products-sheet"
               fill />
             <Ironmensh />  
        </div>
    </div>
  )
}

export default Sheet