"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ImageText from "../imagetext";
import Link from 'next/link'
import application from "@/mocks/application.json";
import { motion } from "framer-motion";
import SettingCircle from "@/components/settingCircle";
import { Roboto } from "next/font/google";
import useProductData from "@/hooks/api";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const index = () => {
  const [size1, setSize1] = useState({
    position: "relative",
    width: "840px",
    height: "440px",
  });
  const [size2, setSize2] = useState({
    position: "relative",
    width: "480px", // Corrected the typo in 'with' to 'width'
    height: "360px",
  });

  // const size2 = {
  //     position: 'relative',
  //     width: '480px', // Corrected the typo in 'with' to 'width'
  //     height: '360px',
  // }

  useEffect(() => {
    const handleResize = () => {
      // Adjust the height dynamically based on screen size
      setSize1((prevSize) => ({
        ...prevSize,
        height:
          window.innerWidth <= 769 && window.innerWidth >= 578
            ? "400px"
            : window.innerWidth <= 577
            ? "280px"
            : "440px",
      }));
      setSize2((prevSize) => ({
        ...prevSize,
        width: window.innerWidth <= 1024 ? "100%" : "480px",
        height:
          window.innerWidth <= 1024 && window.innerWidth >= 769
            ? "567px"
            : window.innerWidth < 769
            ? "270px"
            : "360px",
      }));
    };

    // Initial size adjustment
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function renderData1() {
    const { datas: infos, loading, error } = useProductData("/static-texts");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }
  
    const { data: data1 } = infos || {};
    return data1;
  }

  function renderData2() {
    const { datas: infos, loading, error } = useProductData("/static-media");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }
  
    const { data: data2 } = infos || {};
    return data2;
  }
  
  let dataMajor = renderData1();
  let dataImage = renderData2();


  return (
    <div className="pb-20">
      <h2 className={styles.title}>{dataMajor?.about_about_the_company}</h2>
      <div className={styles.text}>
        {" "}
        <span>{dataMajor?.about_about_the_company_subtitle}</span>{" "}
      </div>
      <div className="text-center mt-5 mb-8">
      <a href="/audit.pdf" target="_blank" className="text-blue-600 text-3xl" rel="noopener noreferrer">
                {dataMajor?.about_audit_opinion}
            </a>
      </div>
      <div className={styles.mainTitle}>
        <motion.h2
          initial={{ opacity: 0, y: -1 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className={`${styles.mainTitleElement}`}
        >
          {dataMajor?.about_we_have}
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 100 }}
          transition={{ delay: 1, duration: 0.2 }}
          className={`mainTitle ${styles.mainTitleElement2} ${styles.mainTitleElementSecond}`}
        >
          {dataMajor?.about_we_have_production}
        </motion.h3>
      </div>
      <div className="flex justify-end mt-48 sm:mb-40 mb-20">
        <ImageText imgData={dataImage?.about_top_of_production.download_link} size={size1} />
      </div>

      <div className="text-center">
        <h3 className={styles.textTred}>{dataMajor?.about_almetbaku}</h3>
        <span className={styles.textTitle}>{dataMajor?.about_our_methods}</span>
      </div>

      <div className="mt-10">
        <div className="flex justify-start">
          <ImageText imgData={dataImage?.about_our_methods.download_link} size={size2} />
        </div>
      </div>

      <div className="lg:mt-10 mt-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className={styles.leftImage}>
            <p>{dataMajor?.about_to_achieve}</p>
            {/* <SettingCircle /> */}
          </div>
          <div className="flex justify-end lg:mt-0 mt-12">
            <ImageText imgData={dataImage?.about_an_ideal_iron.download_link} size={size2} />
          </div>
        </div>
      </div>

      <div className="lg:mt-32 mt-16 mb-52">
        <div className="lg:flex gap-10">
          {/* <div className='w-5/12'></div>
                     <div className="w-7/12">Sagol</div> */}

          <div className={`lg:w-5/12 w-full ${styles.infoText}`}>
            <p className={roboto.className}> {dataMajor?.about_big_text1} </p>
          </div>
          <div className={`lg:w-7/12 w-full lg:pe-10 ${styles.infoText}`}>
            {/* İkinci div için başka bir metin veya içerik ekleyebilirsiniz */}
            <p className={roboto.className}> {dataMajor?.about_big_text2} </p>
           {/* <div className="mt-10">
           <a href="/audit.pdf" target="_blank" className="text-blue-600 text-lg" rel="noopener noreferrer">
                {dataMajor?.about_audit_opinion}
            </a>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
