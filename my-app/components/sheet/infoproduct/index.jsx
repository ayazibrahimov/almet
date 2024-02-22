import React from 'react'
import AllProducts from '../allproduct'


const Products = ({data}) => {
  return (
    <div className='lg:container lg:mx-auto lg:px-14 mt-20 px-8 py-6'>
        <AllProducts data={data} />
    </div>
  )
}

export default Products;