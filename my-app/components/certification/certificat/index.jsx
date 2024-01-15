import React from 'react'
import styles from './styles.module.css'
import CertificatsSlider from '../certificatsSlider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400', 
    subsets: ['latin'] })


const Certificat = () => {
  return (
    <div className='mt-10 mb-6'>
        <h3 className={`${styles.title} ${roboto.className} lg:w-9/12 w-full`}>Permanent values are built <br /> with Almet Baku</h3>
        <CertificatsSlider />
    </div>
  )
}

export default Certificat;