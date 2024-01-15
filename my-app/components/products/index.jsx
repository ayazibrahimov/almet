import React from 'react'
import Title from '@/components/title'
import TitleAbove from '../titleabove'
import {gridImage2} from '@/mocks/gridData'
import Grid from '../metalmesh/grids'




const Products = () => {
  return (
    <section>
      <div className='lg:container lg:mx-auto sm:py-16 sm:px-8 py-8 px-4'> 
        <Title title='Products' />
        <TitleAbove text='Get acquainted with our extensive product range' />
        <Grid gridImage={gridImage2} myName={true} />
      </div>
    </section>
  )
}

export default Products