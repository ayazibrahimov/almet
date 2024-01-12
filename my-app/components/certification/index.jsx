import React from 'react'
import styles from './styles.module.css'
import Slider from './slider.jsx'
import Certificat from './certificat'

const Certification = () => {
  return (
    <div className={styles.component}>
        
        <div className='lg:container lg:mx-auto lg:px-14 px-8 py-16'>
           
           <Slider />
           <Certificat />

        </div>

    </div>
  )
}

export default Certification;