'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import  Image  from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '@/styles/slider.css';

// import required module
import styles from './styles.module.css';

import {Infos} from '@/mocks/sliderFourth'


const index = () => {
  return (
    <div className={ `${styles.component}` }>
     <Swiper
        slidesPerView={1}
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
            delay: 5000,
          }}
        loop={true}  
        modules={[Autoplay]}
        className="mySwiper"
      >
           
           {
            Infos.map((data,index)=>(
             <SwiperSlide key={index}>
                <div className={styles.sliderBox}>
                     <div style={{position:'relative', width:'100%', height:"480px"}}>
                        <Image 
                          src={data.src}
                          style={{borderRadius:'5px'}}
                          alt={data.alt}
                          loading="eager"
                          fill
                        />
                     </div>
                    <div style={{background:'transparent'}}>
                      <div className='mt-4 mb-2'><p className={styles.title}>{data.title}</p></div>
                      <div className='text-left'> <span className={styles.squared}></span><p className={styles.text}>{data.text}</p></div>
                    </div>
                </div>
           </SwiperSlide>
            ))
           }

    
      </Swiper>
    </div>
  )
}

export default index