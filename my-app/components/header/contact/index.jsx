'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import useProductData from "@/hooks/api";
import { parseCookies } from 'nookies';
import styles from "./styles.module.css";

function Contact() {
  const cookies = parseCookies();
  const { datas, loading, error } = useProductData("/contacts");
  const nextLocale = cookies.NEXT_LOCALE;


  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }


  // console.log(nextLocale);


  const { data } = datas || {};

  const handleClicked = (lang) => {
    window.location.href = `/${lang}`; // Use window.location for client-side navigation
  };

  return (
    <div className={`flex gap-9 ${styles.contactContainer} `}>
      <div></div>
      <div>
        <Link href={`tel:${data.phone_number}`}>{data.phone_number}</Link>
      </div>

      <div className="flex gap-6">
        <button onClick={() => handleClicked("az")}>
          <span className={`${styles.firstLng} ${nextLocale == 'az' ? 'active' : '' } `}>AZ</span>
        </button>
        <button onClick={() => handleClicked("en")}>
          <span className={`${styles.secondLng} ${nextLocale == 'en' ? 'active' : ''}`}>EN</span>
        </button>
        <button onClick={() => handleClicked("ru")}>
          <span className={`${styles.thirdLng} ${nextLocale == 'ru' ? 'active' : ''}`}>RU</span>
        </button>
      </div>

      <div className="flex gap-2 socialIconsNavMenu">
        <ul className="flex gap-4 ps-2">
          <li>
            <Link target="_blank" href={data.linkedin}>
              <FaLinkedin
                className="transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]"
                style={{ fontSize: "20px" }}
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={data.instagram}>
              <FaInstagram
                className="transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]"
                style={{ fontSize: "20px" }}
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={data.facebook}>
              <FaFacebookF
                className="transition-colors duration-400 ease-in-out hover:text-[#4f4f4f]"
                style={{ fontSize: "20px" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
