'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import Search from '../search/index'
import Contact from '../contact'
import { usePathname } from 'next/navigation'
import useProductData from '@/hooks/api'


function index({statusInfo,shown,setShown}) {

  const { datas, loading, error } = useProductData("/static-texts");
  
  if (loading) {
    return null; // or return loading indicator, message, etc.
  }

  if (error) {
    return null; // or return error message, try again button, etc.
  }

  const { data } = datas || {};

  


  // const [shown,setShown] = useState(true)
  const pathname = usePathname()

  
  const handleOutsideFilter = (e) => {
    e.preventDefault();
  
    // Stop event propagation to prevent it from reaching parent elements
    e.stopPropagation();
  
    // Toggle the value of 'shown'

    if(!shown){
      setShown(true);
    }

  };

  const handleLinkClick = (e) => {
    // Stop event propagation for link clicks
    e.stopPropagation();
  };


  // className={ `${shown ? styles.indexData1 : styles.indexData2}


  return (
    <div className='col-span-3 flex-col pe-4' >

       { !statusInfo && <div  className='flex justify-end '>
           <Contact />
       </div>}
       <div  onClick={handleOutsideFilter} className={`${statusInfo ? 'mt-3' :'mt-5'} ${styles.listContainer}`}>
            
             <ul className={ `${styles.list} ${shown ? styles.indexData1 : styles.indexData2}` } >
              <li><Link  className={`link ${pathname === '/' ? 'active' : ''}`}  href='/'>{data.menu_home}</Link></li>
              <li> <Link  className={`link ${pathname === '/products' ? 'active' : ''}`}  href='/products'>{data.menu_products}</Link></li>
              <li> <Link  className={`link ${pathname === '/service' ? 'active' : ''}`}  href='/service'>{data.menu_service}</Link> </li>
              <li> <Link  className={`link ${pathname === '/about' ? 'active' : ''}`}  href='/about'>{data.menu_about}</Link> </li>
              <li> <Link  className={`link ${pathname === '/contact' ? 'active' : ''}`}  href='/contact'>{data.menu_contact}</Link> </li>
            </ul>
          
          <div>
            <Search data={data} shown={shown}  setShown={setShown} />
          </div>
       </div>

      
    </div>
  )
}

export default index