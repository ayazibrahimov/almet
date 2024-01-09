import React from 'react'
import styles from './styles.module.css'
import Title from '../title'
import Works from './works'
import Bridge from './coverimage'
import application from '@/mocks/application.json'




const Areas = () => {
  return (
    <section>
        <div className='lg:container lg:mx-auto sm:py-16 sm:px-8 py-8 px-4'>
             <Title title='Areas of Aplication'/>
             <Works positionData='firstElement' application={application.results1}/>
             <Bridge />
        </div>
    </section>
  )
}

export default Areas;