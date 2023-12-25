'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import Search from '../search/index'
import Contact from '../contact'

function index({statusInfo}) {

  const [shown,setShown] = useState(true)

  
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





  return (
    <div className='col-span-2 flex-col pe-4' onClick={handleOutsideFilter}>

       { !statusInfo && <div className='flex justify-end'>
           <Contact />
       </div>}
       <div className={`${statusInfo ? 'mt-3' :'mt-5'} ${styles.listContainer} `}>
            {
              shown && <ul className={ `${styles.list}` } >
              <li><Link href='/' onClick={handleLinkClick}>Home</Link></li>
              <li> <Link href='/products' onClick={handleLinkClick}>Products</Link></li>
              <li> <Link href='/' onClick={handleLinkClick}>Service</Link> </li>
              <li> <Link href='/' onClick={handleLinkClick}>About</Link> </li>
              <li> <Link href='/' onClick={handleLinkClick}>Contact</Link> </li>
            </ul>
            }
          <div>
            <Search  shown={shown}  setShown={setShown} />
          </div>
       </div>

      
    </div>
  )
}

export default index