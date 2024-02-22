'use client'
import React from 'react'
import styles from './styles.module.css'
import CertificatsSlider from '../certificatsSlider'
import { Roboto } from 'next/font/google'
import useProductData from '@/hooks/api'


const roboto = Roboto({
    weight: '400', 
    subsets: ['latin'] })


const Certificat = () => {

  const { datas, loading, error } = useProductData("/static-texts");

  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }
  


  return (
    <div className='mt-10 mb-6'>
        <h3 className={`${styles.title} ${roboto.className} lg:w-9/12 w-full`}>{datas.data.about_permanent} <br /> {datas.data.about_permanent_with_almet}</h3>
        <CertificatsSlider context={datas.data.about_certification} />
    </div>
  )
}

export default Certificat;