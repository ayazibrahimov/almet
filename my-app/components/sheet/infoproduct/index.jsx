import React from 'react'
import AllProducts from '../allproduct'


const Products = ({title,data}) => {
  return (
    <div className='lg:container lg:mx-auto lg:px-14 mt-20 px-8 py-6'>
        <AllProducts title={title} data={data} />
    </div>
  )
}

export default Products;