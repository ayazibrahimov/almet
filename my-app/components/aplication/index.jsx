import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Title from '../title'
import Works from './works'
// import Bridge from './coverimage'
import application from '@/mocks/application.json'
import bridgeImage  from '../../public/bridgeCover.jpg'




const Areas = () => {
  return (
    <section>
        <div className='lg:container lg:mx-auto sm:py-16 sm:px-8 py-8 px-4'>
               <Title title='Areas of Aplication'/>
              <div style={{position: 'relative',width:'100%', height:'900px'}}>
                <Image 
                 fill
                 alt='image1'
                 loading='eager'
                 src={bridgeImage}
                />
              <Works positionData='firstElement' application={application.results1}/>
              </div>
  
             {/* <Bridge /> */}
        </div>
    </section>
  )
}

export default Areas;