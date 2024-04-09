'use client'
import React,{useState,useEffect} from 'react';
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
import instance from '@/api/agent'



const index = () => {

   const pagination = {
     clickable: true,
     renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
     },
   };
   

   const [sliderMetal, setSliderMetal] = useState();
   const [text,setText] = useState('')
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
 
   useEffect(() => {
     async function fetchData() {
       try {
         const response = await instance.get('/home-slides');
         const info = response.data;
         setSliderMetal(info);
       } catch (error) {
         console.error('Error fetching data:', error);
         setError('Error fetching data. Please try again.');
       } finally {
         setLoading(false);
       }
     }
      
      fetchData();
      
    }, []);
    
  

   
  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }


  const { data } = sliderMetal || {};

  



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
            data?.map((metal,index)=>(
                <SwiperSlide key={data.id}>
                    <div className={styles.imageContainerSize} style={{position:'relative', width:'100%', height:'550px' }}> 
                      <Content metal={metal}/>  
                      <DropFilter />
                      <Image
                       style={{borderRadius:'5px'}}
                       src={`https://admin.almetbaku.az/storage/${metal.image}`}
                       alt='image'
                       layout="fill" 
                       objectFit="cover"
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