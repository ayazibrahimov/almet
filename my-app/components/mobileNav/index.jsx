import React from 'react'
import Navigation from './navigation'
import Logo from '@/public/almetMobileLogo.png'
import Image from 'next/image'
//mui




// import styles from './styles.module.css' 

const index = () => {
  return (
    <div className='px-6 py-2'>
 
      <div className='flex justify-between items-center'>

          <div  style={{position:'relative', width:'132px', height:'58px'}} >
            <Image 
              
              src={Logo}
              fill
            />
          </div>

          <Navigation />

      </div>

    </div>
  )
}

export default index