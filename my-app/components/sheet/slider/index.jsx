"use client";
import React, { useState } from "react";
import useStore from '@/zustand/store'
import Image from 'next/image'
import mainSlider1 from "@/public/mainSlider2.jpg";
import Timeline from "./timeline";
import Info from './info'
import Swiper from "./swiper";
import Buttons from "./btns";
import styles from './styles.module.css'





const MajorSlider = () => {
   
  const { index,sliderDatas,Materials, increment,decrement,leftData,rightData } = useStore()

  

  return (
    <div  style={{position:'relative', width: "100%", height: sliderDatas.length > 8 ? `${(sliderDatas.length-9) * 100 + 600}px` :'600px' }  } >
         
       <div style={{position:'relative',width:'100%', height:'100%'}}>
            <Image 
                className='fade-in'
               src={sliderDatas[index]?.src} 
               fill
               alt="Slider cover images" 
              />          
       </div>

       <div style={{position:'absolute',top:"40%",top:'15%',left:'5%'}}>


         <div className= {`md:hidden block  ${styles.infoTextMobile}`} >
            <Info index={index} sliderDatas={sliderDatas} />
         </div>

         <div className="flex md:gap-5 gap-2">

           <div className="sm:w-1/12 w-12">
              <Timeline index={index} sliderDatas={sliderDatas}/>
           </div>
           <div className="md:w-3/12 md:block hidden">
              <Info index={index} sliderDatas={sliderDatas} />
           </div>
           <div className="md:w-8/12 sm:w-11/12 w-fit">
              <Swiper materials={Materials} rightData={rightData} leftData={leftData} index={index} sliderDatas={sliderDatas} />
              <Buttons index={index} sliderDatas={sliderDatas} increment={increment} decrement={decrement} />
           </div>

         </div>

       </div>


    </div>
  );
};

export default MajorSlider;
