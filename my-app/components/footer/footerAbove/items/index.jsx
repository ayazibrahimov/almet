'use client'
import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";
import { Roboto } from "next/font/google";
import List from "../list";
import styles from "./styles.module.css";
const title = Roboto({ weight: "500", subsets: ["latin"] });
import useProductData from "@/hooks/api";
// import { Roboto } from "next/font/google";

// const text = Roboto({ weight: "400", subsets: ["latin"] });


const Item = ({ majorInfo }) => {


  
  const { datas, loading, error } = useProductData("/contacts");
  
  if (loading) {
    return null; // or return loading indicator, message, etc.
  }

  if (error) {
    return null; // or return error message, try again button, etc.
  }

  const { data } = datas || {};


  return (
    <>
      {majorInfo.results.map(
        (data, index) =>
          data.id < 5 && (
            <div key={index} className={`${styles.container} md:mt-2 mt-10`}>
              <p className={`${title.className} ${styles.title}`}>
                {data.title}
              </p>
              <List link={data.link} infos={data.items} />
            </div>
          )
      )}

          <div className={`${styles.container} md:mt-2 mt-10`}>
              <p className={`${title.className} ${styles.title}`}>
                Contact
              </p>
              <ul className="mt-3">

                    <li className={`${styles.item}`}>
                       <Link href={`tel:${data.phone_number}`}>{data.phone_number}</Link>
                    </li >
                    <li href={`mailto:${data.email}`}>
                       <Link  href={`mailto:${data.email}`}>{data.email}</Link>
                    </li>
                    <li className={`${styles.item}`}>
                      <Link target="_blank" href={'https://www.google.com/maps/place/SDN+Biznes+Mərkəzi,+PSG+Kapital/@40.416411,49.8792873,15z/data=!4m6!3m5!1s0x403062a8914691f3:0xe936994ed9e8ac30!8m2!3d40.416411!4d49.8792873!16s%2Fg%2F11cm03nrcy?hl=az&entry=ttu'} > {data.address}</Link>
                    </li>
                </ul>
            </div>  

      <div className={ `${styles.social} flex sm:justify-start justify-center sm:col-span-1 col-span-2 md:mt-4 mt-20` }>
         <ul className="flex gap-4 ps-2 pb-4">
         <li><Link target="_blank" href={data.linkedin}> <FaLinkedin className=' transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
          <li><Link target="_blank" href={data.instagram}> <FaInstagram className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }}/></Link></li>
          <li><Link target="_blank" href={data.facebook}> <FaFacebookF className='transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]' style={{ fontSize: '20px' }} /></Link></li>
        </ul>
      </div>
    </>
  );
};

export default Item;
