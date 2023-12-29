import React from 'react'
import styles from './styles.module.css'
import Slider from './slider.jsx'
import Certificat from './certificat'

const Certification = () => {
  return (
    <div className={styles.component}>
        
        <div className='sm:container sm:mx-auto py-16 px-14'>
           
           <Slider />
           <Certificat />

        </div>

    </div>
  )
}

export default Certification;