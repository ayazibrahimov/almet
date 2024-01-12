import React from 'react'
import ContactTitle from './contactTitle/'
import Information from './information'

const index = () => {
  return (
    <div className='lg:container lg:mx-auto py-16 lg:px-14 px-8'>
        <ContactTitle />
        <Information />
    </div>
  )
}

export default index