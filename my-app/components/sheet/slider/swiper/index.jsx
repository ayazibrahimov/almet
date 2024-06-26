"use client"; // This should be "use strict", not "use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";


const Swiper = ({ index, materials,swiperIndexPlus, leftData, rightData }) => {
  const [statusSlider, setStatus] = useState(true);
  const [translateData, setTranslateData] = useState(0); // Initialize with 0
  const [touchStartStart, setTouchStartStart] = useState(null); //touch slider
  const [touchStartEnd, setTouchStartEnd] = useState(null); //touch slider
  const [startStatus, setStartStatus] = useState(false)
  const [endStatus, setEndtStatus] = useState(false)
  const [startPoint, setStartPoint] = useState(0) 


  useEffect(() => {
    // Function to get initial translateData
    function getInitialTranslateData() {
      return window.innerWidth > 769 ? 175 : 177;
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

  function handleTouchStart(e){ 
         setTouchStartStart(e.touches[0].clientX)
         setStartPoint(e.touches[0].clientX)

  };

  function handleTouchEnd(e) {
      const lastTouch = e.changedTouches[0];
      const lastTouchX = lastTouch.clientX;
      setTouchStartEnd(lastTouchX);
      let deltaX  = touchStartStart - touchStartEnd;

      if ((deltaX > 0 || startPoint > 250) &&  index + 1 < materials.length) {
        swiperIndexPlus(1);
      }
       else if((deltaX < 0 || startPoint < 250) && index !== 0) {
        swiperIndexPlus(-1);
      }

  

  };



  return (
    <div
      className={styles.container}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {materials.map((data, i) => (
        <div
          key={i}
          className={styles.swiperDatas}
          style={{
            position: "absolute",
            transition: "transform 0.5s",
            width: `${
              (i+1 - 1) * translateData - translateData * index !== 0
                ? 176
                : ""
            }`,
            height: `${
              (i+1 - 1) * translateData - translateData * index !== 0
                ? 295
                : ""
            }`,
            transform: `translateX(${
              (i+1 - 1) * translateData - translateData * index
            }px)`,
          }}
        >
          <div 
            className={styles.boxModel} 
            style={{ 
              position: "relative",
              width: `${
                (i+1 - 1) * translateData - translateData * index === 0 && 180}px`,
              height: `${
                (i+1 - 1) * translateData - translateData * index === 0 && 280}px`,
            }}
           >
              <Link href={`/products/${data.id}`}> 
              <Image
              src={`https://admin.almetbaku.az/storage/${data.image}`}
              alt={data.alt}
              loading="eager"
              fill
              style={{
                transform: `scale(${
                  (i + 1 - 1) * translateData - translateData * index !== 0
                    ? 0.7
                    : 1
                })`,
                transition: "transform 0.5s",
              }}
            />
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Swiper;
