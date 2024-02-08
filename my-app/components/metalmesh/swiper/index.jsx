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
import AlmetVideo from "@/public/almet2.mp4";


function Sliding() {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Start the video when the component mounts
    video.play();
  }, []);



  return (
    <div>
      <video 
         ref={videoRef} 
         controls={false} 
         autoPlay 
         loop
         muted
        >
        <source src={AlmetVideo} type="video/mp4" />
        {/* Add more <source> elements for other video formats if needed */}
      </video>
    </div>
  );
}

export default Sliding;
