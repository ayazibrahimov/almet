'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImages } from '@/mocks/sliders';
import styles from './styles.module.css'
import DropFilter from '@/components/dropfilter';





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


import '@/styles/slider.css';


// import required modules
import { EffectFade,Autoplay } from 'swiper/modules';



function Sliding() {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay]}
        className="mySwiper rounded-md"
        >

        {
          SliderImages.map((image,index)=>(
            <SwiperSlide key={index}>
             <div className={styles.imageContainerSize} style={{position:'relative', width:'100%', height:'600px', }}>
               <DropFilter />
               <Image
                src={image.src}
                alt={image.alt}
                full
               ></Image>
             </div>
            </SwiperSlide>  
          ))
        }  

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>

    </div>
  )
}

export default Sliding;