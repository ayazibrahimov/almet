import React from 'react'
import Company from '@/container/company-info' 

const Slug = ({params}) => {
  
    const {slug} = params
  
    return (
    <div>
         <Company slug={slug} />
    </div>
  )
}

export default Slug