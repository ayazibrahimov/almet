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

  console.log(data);

  return (
    <>
      {majorInfo.results.map(
        (data, index) =>
          data.id < 5 && (
            <div key={index} className={`${styles.container} md:mt-2 mt-10`}>
              <p className={`${title.className} ${styles.title}`}>
                {data.title}
              </p>
              <List infos={data.items} />
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
                        {data.address}
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
