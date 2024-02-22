"use client";
import React,{useEffect, useRef} from "react";
// import Image from "next/image";
// import Head from 'next/head';

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { SliderImages } from "@/mocks/sliders";
// import styles from "./styles.module.css";
// import DropFilter from "@/components/dropfilter";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "@/styles/slider.css";

// import required modules
// import { EffectFade, Autoplay } from "swiper/modules";
// import { DefaultPlayer as Video } from "react-html5video";
// import "react-html5video/dist/styles.css";
//import AlmetVideo from "@/public/almet2.mp4";
import DropFilter from "@/components/dropfilterVideo";
import useProductData from '@/hooks/api'



function Sliding({ myVideo }) {
  const videoRef = useRef(null);

  const { datas, loading, error } = useProductData("/static-media");

  if (loading) {
    return null; // or return loading indicator, message, etc.
  }

  if (error) {
    return null; // or return error message, try again button, etc.
  }



  // useEffect(() => {
  //   const video = videoRef.current;

  //   // Check if video is not null before calling play
  //   if (video) {
  //     video.play();
  //   }
  // }, [datas]);


  return (
    <div style={{ position: 'relative' }}>
      <DropFilter />
      <video
        preload="auto"
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        muted
      >
        <source
          src={`http://195.201.238.29:8000/storage/${datas.data.home_video_file.download_link}`}
          type="video/mp4"
        />
        {/* Add more <source> elements for other video formats if needed */}
      </video>
    </div>
  );
}

export default Sliding;
