import React from 'react'
import styles from './styles.module.css'
import ImageText from './imagetext'
import img1 from '@/public/Rectangle 53.png';
import img2 from '@/public/Rectangle 42.png';
import img3 from '@/public/Rectangle 43.png';
import setting1 from '@/public/setting1.svg'
// import motion from 'framer-motion'
import Image from 'next/image'

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
    <div className='sm:container sm:mx-auto py-16'>

        <h2 className={styles.title}>“about the company”</h2>
        <div className={styles.text}> <span>Our different purpose</span> </div>
        
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
                       <span 
                         className={styles.setting1}>
                        <Image 
                          src={setting1} />
                       </span>
                       <span 
                         className={styles.setting2}>
                        <Image 
                          src={setting1} />
                       </span>
                 </div>
                 <div className='flex justify-end'><ImageText  imgData={img3}   size={size2}/></div>
            </div>
        </div>


    </div>
  )
}

export default index