"use clinet";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import materials1 from "@/public/materials1.jpg";
import Image from "next/image";

const Swiper = ({ index, materials, leftData, rightData }) => {
  const [statusSlider, setStatus] = useState(true);
  const [translateData, setTranslateData] = useState(getInitialTranslateData);

  function getInitialTranslateData() {
    return window.innerWidth > 769 ? 190 : 160;
  }

  useEffect(() => {
    function handleResize() {
      setTranslateData(getInitialTranslateData());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {materials.map((data, i) => (
        <div
          className={styles.swiperDatas}
          style={{
            position: "absolute",
            transition: "transform 0.5s",
            width: `${ (data.id - 1) * translateData - translateData * index !== 0 ? 176 : ""}`,
            height: `${ (data.id - 1) * translateData - translateData * index !== 0 ? 295 : ""}`, 
            transform: `translateX(${
              (data.id - 1) * translateData - translateData * index
            }px)`,
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
