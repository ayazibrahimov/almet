"use client"; // This should be "use strict", not "use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Swiper = ({ index, materials, leftData, rightData }) => {
  const [statusSlider, setStatus] = useState(true);
  const [translateData, setTranslateData] = useState(0); // Initialize with 0

  useEffect(() => {
    // Function to get initial translateData
    function getInitialTranslateData() {
      return window.innerWidth > 769 ? 190 : 160;
    }

    // Set initial translateData
    setTranslateData(getInitialTranslateData());

    // Event listener for window resize
    function handleResize() {
      setTranslateData(getInitialTranslateData());
    }

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div className={styles.container}>
      {materials.map((data, i) => (
        <div
          key={i}
          className={styles.swiperDatas}
          style={{
            position: "absolute",
            transition: "transform 0.5s",
            width: `${(data.id - 1) * translateData - translateData * index !== 0 ? 176 : ""}`,
            height: `${(data.id - 1) * translateData - translateData * index !== 0 ? 295 : ""}`,
            transform: `translateX(${(data.id - 1) * translateData - translateData * index}px)`,
          }}
        >
          <div className={styles.boxModel} style={{ position: "relative" }}>
            <Image
              src={data.src}
              alt={data.alt}
              loading="eager"
              fill
              style={{
                transform: `scale(${
                  (data.id - 1) * translateData - translateData * index !== 0
                    ? 0.85
                    : 1
                })`,
                transition: "transform 0.5s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Swiper;
