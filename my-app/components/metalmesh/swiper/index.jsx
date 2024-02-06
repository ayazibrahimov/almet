"use client";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImages } from "@/mocks/sliders";
import styles from "./styles.module.css";
import DropFilter from "@/components/dropfilter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "@/styles/slider.css";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

import { DefaultPlayer as Video } from "react-html5video";
import AlmetVideo from "@/public/almet2.mp4";

import { Height } from "@mui/icons-material";

function Sliding() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        // effect={"fade"}
        // autoplay={{
        //   delay: 43000,
        //   disableOnInteraction: false,
        // }}
   
        className="mySwiper rounded-md"
      >
        <SwiperSlide style={{ borderRadius: "10px" }}>
          <div
            className={styles.imageContainerSize}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Video
                controls={false}
                autoPlay
                muted
                playsInline
                loop
                className={styles.video}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={AlmetVideo} type="video/webm"></source>
              </Video>
            </div>
          </div>
        </SwiperSlide>

        {SliderImages.map((image, index) => (
          <SwiperSlide style={{ borderRadius: "10px" }} key={index}>
            <div
              className={styles.imageContainerSize}
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
                borderRadius: "10px",
              }}
            >
              <DropFilter />
              <Image
                style={{ borderRadius: "5px" }}
                src={image.src}
                alt={image.alt}
                full
                loading="eager"
                priority={true}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sliding;
