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




function Contact() {

    const [ icon, setIcon] = useState(null)





  return (
    <div className={`flex gap-9 ${styles.contactContainer} `}>
        <div>
            
        </div>
      <div>
        <Link href="tel:+994554788754">+994 55 478 87 54</Link>
      </div>

      <div className="flex gap-6">  
        <button> 
           <span className={styles.firstLng}>
             AZ
            </span>
        </button> 
        <button> 
            <span className= {`${styles.secondLng} active`} >
              EN
            </span> 
        </button>
        <button> 
            <span className={styles.thirdLng}>
              RU
            </span> 
        </button>
      </div>

      <div className="flex gap-2 socialIconsNavMenu">
      <ul className="flex gap-4 ps-2">
          <li><Link target="_blank" href='https://www.linkedin.com/in/almet-baku-trading/'> <FaLinkedin className=' transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
          <li><Link target="_blank" href='https://www.instagram.com/almet.baku/'> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }}/></Link></li>
          <li><Link target="_blank" href='https://www.facebook.com/almetbakuaz'> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
