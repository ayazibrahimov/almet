import React from 'react'
import styles from './styles.module.css'
import Arrow from '@/public/bend-arrow.svg'
import Image from 'next/image'
import Grid from '../grids'
import { gridImage } from '@/mocks/gridData'


function Features() {
  return (
    <>
        <div className={styles.container}>
          <h2>
            METAL MESH
            <span> <Image src={Arrow} alt='Arrow'></Image></span>
          </h2>
          <h4>FEATURES</h4>
        </div>
        
        <Grid  gridImage={gridImage}/>

     </> 
  )
}

export default Features