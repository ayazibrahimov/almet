import React from 'react'
import Title from '@/components/title'
import TitleAbove from '../titleabove'
import Works from '@/components/aplication/works'
import application from '@/mocks/application.json'
import Slider from './slider'



const Services = () => {
  return (
    <section>
        <div className='lg:container lg:mx-auto lg:py-16 lg:px-8 px-4 py-8'>
          <Title title='Products' />
          <TitleAbove text='Our top-notch services'/>
          <Works positionData='secondElement' application={application.results2} /> 
        </div>
        <Slider />
    </section>
  )
}

export default Services;