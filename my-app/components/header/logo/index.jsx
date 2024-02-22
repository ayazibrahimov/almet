'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import useProductData from '@/hooks/api'


function index({statusInfo}) {
  const { datas, loading, error } = useProductData("/static-media");
  
  if (loading) {
    return null; // or return loading indicator, message, etc.
  }

  if (error) {
    return null; // or return error message, try again button, etc.
  }

  const { data } = datas || {};

  
  return (
   <div className='col-span-1'>
         <div className='gap-2' style={ statusInfo ? {position:'relative', width: '200px', height: '80px'} : {position:'relative', width:'250px', height:'100px'}}>
         <Link href='/'>
          <Image
           priority 
           src={`http://195.201.238.29:8000/storage/${data.logo_header.download_link}`}
           alt="Logo"
           loading='eager'
           fill
           />
        </Link>
         
         </div>
   </div>
  )
}

export default index