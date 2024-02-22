'use client'
import React,{useState} from 'react'
import styles from './styles.module.css'
import mastericon from '@/public/mastericon.svg'
import Image from 'next/image'
import useProductData from '@/hooks/api';
import InfoApp from './infoApps/index'

const index = () => {


   const { datas: infos, loading, error } = useProductData('/static-texts');
  
   if (loading) {
     return;
   }

   if (error) {
     return;
   }
   
   const { data :data1 } = infos || {};
  
   
   



  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {data1.services_our_service}
        </h2>

        <div className='flex flex-col justify-center items-center gap-2 mt-20'>
          <span> 
            <Image
              src={mastericon}
              alt='image icon'
            />
          </span>

          <p className={styles.heading}>
            {data1.services_our_top_notch}
          </p>
           
        </div>
     </div>


      <InfoApp />
    
    </>
  )
}

export default index