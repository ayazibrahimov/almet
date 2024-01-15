'use client'
import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";
import styles from './styles.module.css'

const SocialMedia = () => {
  return (
    <div>
        <div className={ `${styles.social} flex sm:justify-start justify-center sm:col-span-1 col-span-2 mt-4` }>
        <ul className="flex gap-4 ps-2 pb-4">
          <li><Link href='/'> <FaTwitter className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaLinkedin className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaYoutube className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }}/></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SocialMedia;