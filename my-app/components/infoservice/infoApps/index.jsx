import React from 'react'
import Works from '@/components/aplication/works'
import application from '@/mocks/application.json'
import useProductData from '@/hooks/api';

const index = () => {

    const { datas, loading, error } = useProductData('/services');
  
    if (loading) {
      return;
    }
 
    if (error) {
      return;
    }
    
    const { data } = datas || {};

  return (
    <div>
        <div className='sm:container sm:mx-auto px-2 pb-4'>
          <Works spinner={false} positionData='secondElement' application={data} /> 
       </div>
    </div>
  )
}

export default index