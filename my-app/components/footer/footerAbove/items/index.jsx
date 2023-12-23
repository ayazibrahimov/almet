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
import { Roboto } from "next/font/google";
import List from "../list";
import styles from "./styles.module.css";
const title = Roboto({ weight: "500", subsets: ["latin"] });

const Item = ({ datas }) => {
  return (
    <>
      {datas.results.map(
        (data, index) =>
          data.id < 5 && (
            <div key={index} className={styles.container}>
              <p className={`${title.className} ${styles.title}`}>
                {data.title}
              </p>
              <List infos={data.items} />
            </div>
          )
      )}

      <div className={styles.social}>
        <ul className="flex gap-4 ps-2">
          <li><Link href='/'> <FaTwitter className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaLinkedin className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaYoutube className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }} /></Link></li>
          <li><Link href='/'> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#828282]' style={{ fontSize: '22px' }}/></Link></li>
        </ul>
      </div>
    </>
  );
};

export default Item;
