'use client'
import React from 'react'
import styles from './styles.module.css'
import ImageText from '../imagetext'
import img1 from '@/public/Rectangle 53.png';
import img2 from '@/public/Rectangle 42.png';
import img3 from '@/public/Rectangle 43.png';
import application from '@/mocks/application.json'
import {motion} from 'framer-motion'
import SettingCircle from '@/components/settingCircle'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400', 
    subsets: ['latin'] })

const index = () => {

    const size1 = {
        position: 'relative',
        width: '840px', // Corrected the typo in 'with' to 'width'
        height: '440px',
    }

    const size2 = {
        position: 'relative',
        width: '480px', // Corrected the typo in 'with' to 'width'
        height: '360px',
    }



  return (
    <div className='pb-20'>
      <h2 className={styles.title}>“about the company”</h2>
        <div className={styles.text}> <span>Our different purpose</span> </div>
        <div className={styles.mainTitle}>
           <motion.h2
             initial={{ opacity:0 ,y:-1 }}
             animate={{ opacity:1 , y:1 }} 
             transition={{ delay: 1, duration:.8 }}
            className={`${styles.mainTitleElement}`}
            >We have the top of</motion.h2>
           <motion.h3
            initial={{opacity:0, height:0}}
            animate={{opacity:1, height:100 }} 
            transition={{ delay:1, duration:.2 }}
            className={`mainTitle ${styles.mainTitleElement2} ${styles.mainTitleElementSecond}`}>
              production</motion.h3>
        </div>
        <div className='flex justify-end mt-48 mb-40'>
            <ImageText imgData={img1}  size={size1}/>
        </div>

        <div className='text-center'>
            <h3 className={styles.textTred}>#almettradingbaku</h3>
            <span className={styles.textTitle}>**Our methods make a difference in metal fabrication.</span>
        </div>


        <div className='mt-10'>
            <div className='flex justify-start'>
              <ImageText  imgData={img2}   size={size2}/>
            </div>
        </div>


        <div className='mt-10'>
            <div className="grid grid-cols-2 gap-4">
                 <div className={styles.leftImage}>
                    <p>To achieve an ideal iron product, you need an experienced and knowledgeable team.</p>
                     <SettingCircle /> 
                 </div>
                 <div className='flex justify-end'><ImageText  imgData={img3}   size={size2}/></div>
            </div>
        </div>



        <div className='mt-32 mb-52'>
               <div className='flex gap-10'>
                     {/* <div className='w-5/12'></div>
                     <div className="w-7/12">Sagol</div> */}

                       {
                        application.info.map((obj,index)=>(
                          <div  className={`${obj.id === 1 ? 'w-5/12' : 'w-7/12 pe-10' }  ${styles.infoText}` } key={index}>
                            <p className={roboto.className}>{obj.text}</p>
                           </div>
                        ))
                       }

               </div>
        </div>
    </div>
  )
}

export default index