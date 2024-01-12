import React from 'react'
import styles from './styles.module.css'
import mastericon from '@/public/mastericon.svg'
import Image from 'next/image'
import Works from '@/components/aplication/works'
import application from '@/mocks/application.json'


const index = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
         “Our sevices”
        </h2>

        <div className='flex flex-col justify-center items-center gap-2 mt-20'>
          <span> 
            <Image
              src={mastericon}
              alt='image icon'
            />
          </span>

          <p className={styles.heading}>
            Our top-notch services
          </p>
           
        </div>
     </div>


     <div className='sm:container sm:mx-auto px-2 pb-4'>
        <Works spinner={false} positionData='secondElement' application={application.results3} /> 
     </div>
    
    </>
  )
}

export default index