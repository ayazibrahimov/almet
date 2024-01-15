import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: '400', 
  subsets: ['latin'] })


function Grid({gridImage,myName=false}) {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

     
           {
            gridImage.map((data,index)=>(
               <div key={index}>
                 <div className={`  ${!myName ? styles.box1 : styles.box2} ${styles.container}  ${data.status ? 'shadowed' : '' } `}  style={ !myName ? {position:'relative', width: '100%'}: {position:'relative', width: '100%'}}>
                   {!myName && <p className={`roboto ${styles.para}`}>{data.header}</p>}
                    {data.status === false &&  <div className={styles.dropfilter}></div>}  
                    {myName &&  <h4 className={`roboto ${styles.heading}`}>{data.header}</h4> }
                    <Image  
                        className={styles.productImage}         
                        src={data.src}
                        alt={data.alt}
                        loading='eager'
                        fill
                     ></Image>

                 </div> 
               </div>
            ))
           }

    </div>
  )
}

export default Grid