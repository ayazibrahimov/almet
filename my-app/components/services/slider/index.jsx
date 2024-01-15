'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "@/styles/pagination.css"
import styles from './styles.module.css'

import { Pagination,Autoplay } from 'swiper/modules';
import {SliderMetal} from '@/mocks/sliders'
import DropFilter from '@/components/dropfilter';
import Image from 'next/image';
import Content from '../content'



const index = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      };
    



  return (
    <div className={styles.container}>
      <Swiper
        pagination={pagination}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 6000,
          }}  
        className="mySwiper"
      >
         {
            SliderMetal.map((metal,index)=>(
                <SwiperSlide key={index}>
                    <div className={styles.imageContainerSize} style={{position:'relative', width:'100%', height:'550px' }}> 
                      <Content  metal={metal}/>  
                      <DropFilter />
                      <Image
                       style={{borderRadius:'5px'}}
                       src={metal.src}
                       alt={metal.alt}
                       loading='eager'
                       fill
                      ></Image>
                    </div>
                </SwiperSlide>
            ))
         }
      </Swiper>
    </div>
  )
}

export default index