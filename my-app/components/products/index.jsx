import React from 'react'
import Title from '@/components/title'
import TitleAbove from '../titleabove'
import {gridImage2} from '@/mocks/gridData'
import Grid from '../metalmesh/grids'




const Products = () => {
  return (
    <section>
      <div className='sm:container sm:mx-auto py-16 px-8'> 
        <Title title='Services' />
        <TitleAbove text='Get acquainted with our extensive product range' />
        <Grid gridImage={gridImage2} myName={true} />
      </div>
    </section>
  )
}

export default Products