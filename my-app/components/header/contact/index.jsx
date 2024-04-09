'use client'
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import useProductData from '@/hooks/api'
import { setCookie } from 'nookies';




function Contact() {

    const [ icon, setIcon] = useState(null)

    const { datas, loading, error } = useProductData("/contacts");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }
  
    const { data } = datas || {};
  

    const handleClicked = (lang) =>{
      localStorage.setItem('lang', lang);
 
      console.log(lang);

      setCookie(null, 'lang', lang, {
        maxAge: 365 * 24 * 60 * 60, // 1 yıl
        path: '/',
      });

      window.location.reload()
      // router.reload()
    }
    


  return (
    <div className={`flex gap-9 ${styles.contactContainer} `}>
        <div>
            
        </div>
      <div>
        <Link href={`tel:${data.phone_number}`}>{data.phone_number}</Link>
      </div>

      <div className="flex gap-6">  
        <button onClick={() => handleClicked('az')}> 
           <span className={styles.firstLng}>
             AZ
            </span>
        </button> 
        <button onClick={() => handleClicked('en')}> 
            <span className= {`${styles.secondLng}`} >
              EN
            </span> 
        </button>
        <button onClick={() => handleClicked('ru')}> 
            <span className={styles.thirdLng}>
              RU
            </span> 
        </button>
      </div>

      <div className="flex gap-2 socialIconsNavMenu">
      <ul className="flex gap-4 ps-2">
          <li><Link target="_blank" href={data.linkedin}> <FaLinkedin className=' transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
          <li><Link target="_blank" href={data.instagram}> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }}/></Link></li>
          <li><Link target="_blank" href={data.facebook}> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
