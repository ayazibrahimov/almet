import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Arrow from '@/public/bend-arrow.svg'
import Image from 'next/image'



const ToProducts = ({info}) => {
  return (
    <div className='flex justify-end  hover:opacity-50 w-2/5'>
        <Link href='/' className='flex'>
         <span className={styles.imageArrow} style={{marginTop:'-24px',marginLeft:'-30px'}}><Image src={Arrow} alt='Arrow'></Image></span>
          <div className='flex justify-end'>     
              <h2  className={styles.text}>{info}</h2>
          </div>  
        </Link> 
    </div>
  )
}

export default ToProducts