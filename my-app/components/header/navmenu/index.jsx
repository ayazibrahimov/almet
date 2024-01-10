'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import Search from '../search/index'
import Contact from '../contact'
import { usePathname } from 'next/navigation'


function index({statusInfo,shown,setShown}) {

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

  // const handleLinkClick = (e) => {
  //   // Stop event propagation for link clicks
  //   e.stopPropagation();
  // };


  // className={ `${shown ? styles.indexData1 : styles.indexData2}


  return (
    <div className='col-span-2 flex-col pe-4' >

       { !statusInfo && <div  className='flex justify-end '>
           <Contact />
       </div>}
       <div  onClick={handleOutsideFilter} className={`${statusInfo ? 'mt-3' :'mt-5'} ${styles.listContainer}`}>
            
             <ul className={ `${styles.list} ${shown ? styles.indexData1 : styles.indexData2}` } >
              <li><Link  className={`link ${pathname === '/' ? 'active' : ''}`}  href='/'>Home</Link></li>
              <li> <Link  className={`link ${pathname === '/products' ? 'active' : ''}`}  href='/products'>Products</Link></li>
              <li> <Link  className={`link ${pathname === '/service' ? 'active' : ''}`}  href='/service'>Service</Link> </li>
              <li> <Link  className={`link ${pathname === '/about' ? 'active' : ''}`}  href='/about'>About</Link> </li>
              <li> <Link  className={`link ${pathname === '/contact' ? 'active' : ''}`}  href='/contact'>Contact</Link> </li>
            </ul>
          
          <div>
            <Search  shown={shown}  setShown={setShown} />
          </div>
       </div>

      
    </div>
  )
}

export default index