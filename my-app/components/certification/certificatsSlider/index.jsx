"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/slider.css";

// import required module

import { Certificats } from "@/mocks/sliderFourth";

const index = () => {
  return (
    <div>
      <h3 className={styles.title}>#certification</h3>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3500,
          }}
          loop={true} // Add the loop property here
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Certificats.map((data, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sliderBox}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={data.src}
                    style={{ borderRadius: "10px" }}
                    alt={data.alt}
                    loading="eager"
                    fill
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default index;
