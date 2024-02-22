'use client'
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import  Image  from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required module
import styles from './styles.module.css';
import {Infos} from '@/mocks/sliderFourth'
import Spinner from '@/components/spinner';
import useProductData from '@/hooks/api';



const index = () => {

  const [loadingData, setLoadingData] = useState(true);


  const onImageLoad = () => {
    setLoadingData(false);
  };

    const { datas, loading, error } = useProductData("/about-slides");
  
    if (loading) {
      return null; // or return loading indicator, message, etc.
    }
  
    if (error) {
      return null; // or return error message, try again button, etc.
    }


    const { data }  = datas || {}





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
            data.map((dat,index)=>(
             <SwiperSlide key={dat.id}>
                <div className={styles.sliderBox}>
                     <div style={{position:'relative', width:'100%', height:"480px"}}>
                        <Image 
                          src={`https://admin.almetbaku.az/storage/${dat.image}`}
                          style={{borderRadius:'5px'}}
                          alt='sliderImage'
                          loading='lazy'
                          onLoad={onImageLoad}
                          fill
                        />
                        {loadingData ? <Spinner /> : null}
                     </div>
                    <div style={{background:'transparent'}}>
                      <div className='mt-4 mb-2'><p className={styles.title}>{dat.title}</p></div>
                      <div className='text-left'> <span className={styles.squared}></span><p className={styles.text}>{dat.description}</p></div>
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