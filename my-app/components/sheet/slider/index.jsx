"use client";
import React, { useState } from "react";
import {useStore1, useStore2} from '@/global-storage/store'
import Image from 'next/image';
import Timeline from "./timeline";
import Info from './info';
import Swiper from "./swiper";
import Buttons from "./btns";
import DropFilter from '@/components/dropfilter'
import styles from './styles.module.css'






const MajorSlider1 = ( {data} ) => {
  
   
  const { index,sliderDatas,Materials, increment,decrement,leftData,rightData,changeIndex,swiperIndexPlus } = useStore1()
  
  return (
    <div  className="my-20" style={{position:'relative', width: "100%", height: sliderDatas.length > 9 ? `${(sliderDatas.length-9) * 100 + 600}px` :'650px' }  } >
         

       <div style={{position:'relative',width:'100%', height:'100%'}}>
            <DropFilter />
            <Image 
               src={`https://admin.almetbaku.az/storage/${data?.[index]?.background_image ?? ''}`}
               alt="Slider cover images" 
               layout="fill" 
               objectFit="cover"
              />          
        </div>

       <div style={{position:'absolute',top:"40%",top:'15%',left:'5%',zIndex:222}}>
         <div className= {`md:hidden block  ${styles.infoTextMobile}`} >
            <Info index={index} sliderDatas={data} />
         </div>
         <div className="flex md:gap-5 gap-2">

           <div className="sm:w-1/12 w-12">
              <Timeline changeIndex={changeIndex} index={index} sliderDatas={data}/>
           </div>
           <div className="md:w-3/12 md:block hidden">
              <Info index={index} sliderDatas={data} />
           </div>
           <div className="md:w-8/12 sm:w-11/12 w-fit"  style={{height:'355px'}}>
              <Swiper swiperIndexPlus={swiperIndexPlus} materials={data} rightData={rightData} leftData={leftData} index={index} sliderDatas={data} />
              <Buttons index={index} sliderDatas={data} increment={increment} decrement={decrement} />
           </div>
         </div>
       </div>
    </div>
  );
};

const MajorSlider2 = ({data}) => {
   
  const { index,sliderDatas2,Materials2, increment,decrement,leftData,rightData,changeIndex,swiperIndexPlus } = useStore2()
  
  return (
    <div  className="my-20" style={{position:'relative', width: "100%", height: sliderDatas2.length > 9 ? `${(sliderDatas2.length-9) * 100 + 600}px` :'650px' }  } >
       <div style={{position:'relative',width:'100%', height:'100%'}}>
            <DropFilter />
            <Image 
               src={`https://admin.almetbaku.az/storage/${data?.[index]?.background_image ?? ''}`}
               alt="Slider cover images" 
               layout="fill" 
               objectFit="cover"
              />          
       </div>
       <div style={{position:'absolute',top:"40%",top:'15%',left:'5%',zIndex:222}}>
         <div className= {`md:hidden block  ${styles.infoTextMobile}`} >
            <Info index={index} sliderDatas={data} />
         </div>
         <div className="flex md:gap-5 gap-2">
           <div className="sm:w-1/12 w-12">
              <Timeline  changeIndex={changeIndex}  index={index} sliderDatas={data}/>
           </div>
           <div className="md:w-3/12 md:block hidden">
              <Info index={index} sliderDatas={data} />
           </div>
           <div className="md:w-8/12 sm:w-11/12 w-fit" style={{height:'355px'}}>
              <Swiper swiperIndexPlus={swiperIndexPlus} materials={data} rightData={rightData} leftData={leftData} index={index} />
              <Buttons index={index} sliderDatas={data} increment={increment} decrement={decrement} />
           </div>
         </div>
       </div>
    </div>
  );
};

export {MajorSlider1, MajorSlider2};
