"use client";
import React, { useState } from "react";
import useStore from '@/zustand/store'
import Image from 'next/image'
import mainSlider1 from "@/public/mainSlider2.jpg";
import Timeline from "./timeline";
import Info from './info'
import Swiper from "./swiper";
import Buttons from "./btns";





const MajorSlider = () => {
   
  const { index,sliderDatas,Materials, increment,decrement,leftData,rightData } = useStore()

  

  return (
    <div  style={{position:'relative', width: "100%",height: "600px"}} >
         
       <div style={{position:'relative',width:'100%', height:'100%'}}>
            <Image 
                className='fade-in'
               src={sliderDatas[index]?.src} 
               fill
               alt="salam alekum" 
              />          
       </div>

       <div style={{position:'absolute',top:"40%",top:'15%',left:'5%'}}>

         <div className="flex gap-5">

           <div className="w-1/12">
              <Timeline index={index} sliderDatas={sliderDatas}/>
           </div>
           <div className="w-3/12">
              <Info index={index} sliderDatas={sliderDatas} />
           </div>
           <div className="w-8/12">
              <Swiper materials={Materials} rightData={rightData} leftData={leftData} index={index} sliderDatas={sliderDatas} />
           </div>

         </div>


  

       </div>

      <Buttons index={index} sliderDatas={sliderDatas} increment={increment} decrement={decrement} />
       


    </div>
  );
};

export default MajorSlider;
