'use client'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLogo from '@/public/almet-logo-png.png'
// import HeaderLogo from '@/public/almetMajorLogo.png'
import HeaderLogoText from '@/public/Group 3.png'
import React from 'react'


function index({statusInfo}) {
  return (
   <div className='col-span-1'>
         <div className='gap-2' style={ statusInfo ? {position:'relative', width: '200px', height: '80px'} : {position:'relative', width:'250px', height:'100px'}}>
         <Link href='/'>
          <Image
           priority 
           src={HeaderLogo}
           alt="Logo"
           loading='eager'
           fill
        
          // className='auto'
          // width={500} //automatically provided
          // height={500} //automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
           />
        </Link>
         
         </div>
   </div>
  )
}

export default index