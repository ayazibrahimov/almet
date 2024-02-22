"use client";
import React, { useState } from "react";
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
import Spinner from '@/components/spinner';
import { Certificats } from "@/mocks/sliderFourth";
import useProductData from '@/hooks/api'




const index = ({context}) => {
  
  const [loadingData, setLoadingData] = useState(true);
 
    const { datas, loading, error } = useProductData("/certifications");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }
  
    const { data } = datas || {};

    




  const onImageLoad = () => {
    setLoadingData(false);
  };
 


  return (
    <div>
      <h3 className={styles.title}>{context}</h3>
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
          {data.map((dat, index) => (
            <SwiperSlide key={dat.key}>
              <div className={styles.sliderBox}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={`https://admin.almetbaku.az/storage/${dat.image}`}
                    style={{ borderRadius: "10px" }}
                    alt='sliderImage'
                    loading='lazy'
                    onLoad={onImageLoad}
                    fill
                  />{loadingData ? <Spinner /> : null}
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
