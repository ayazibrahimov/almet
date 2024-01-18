import React from 'react'
import CompanyInfo from '@/pages/company-info' 

const Slug = ({params}) => {
  
    const {slug} = params
  
    return (
    <div>
         <CompanyInfo slug={slug} />
    </div>
  )
}

export default Slug