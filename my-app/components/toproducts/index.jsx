import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Arrow from '@/public/bend-arrow.svg'
import Image from 'next/image'
// import Arrow from '@/public/bend-arrow.svg'



// font-weight: 500;
// line-height: 38px; /* 118.75% */
// text-decoration-line: underline;

const ToProducts = ({info}) => {
  return (
    <div className='hover:opacity-50'>
        <Link href='/' className='flex'>
         <span style={{display:'inline-block', marginTop:'-24px',marginLeft:'-30px'}}><Image src={Arrow} alt='Arrow'></Image></span>
          <div>     
              <h2  className={styles.text}>{info}</h2>
          </div>  
        </Link> 
    </div>
  )
}

export default ToProducts