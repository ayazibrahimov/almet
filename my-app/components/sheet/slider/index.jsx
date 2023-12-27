"use client";
import React, { useState } from "react";
import {sliderDatas} from '@/mocks/sliderFourth'
import Image from 'next/image'
import mainSlider1 from "@/public/mainSlider2.jpg";
import Timeline from "./timeline";
import Info from './info'
import Swiper from "./swiper";




const MajorSlider = () => {

  const[sliders,setSliders] = useState(sliderDatas)


  return (
    <div  style={{position:'relative', width: "100%",height: "600px"}} >
       

       <div style={{position:'relative',width:'100%', height:'100%'}}>
            <Image 
               src={mainSlider1} 
               fill
               alt="salam alekum" 
              />          
       </div>

       <div style={{position:'absolute',top:"40%",top:'15%',left:'5%'}}>

         <div className="flex gap-5">

           <div className="w-1/12">
              <Timeline />
           </div>
           <div className="w-3/12">
              <Info />
           </div>
           <div className="w-8/12">
               <Swiper />
           </div>

         </div>

       </div>


    </div>
  );
};

export default MajorSlider;
