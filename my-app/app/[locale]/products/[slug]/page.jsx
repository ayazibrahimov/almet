import React from 'react'
import ProductDetail from '@/components/productDetail/ProductDetail'


const page = ({params}) => {


    let id = params.slug
    let lang = params.locale

 
  return <ProductDetail id={id} lang={lang} />


}

export default page