'use clinet'
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import materials1 from "@/public/materials1.jpg";
import Image from "next/image";

const Swiper = ( {materials, leftData,rightData} ) => {

  const [statusSlider, setStatus] = useState(true)
 


  return (
    <div className={styles.container}>
         
         {
          materials.map((data,i)=>(
            <div className={styles.swiperDatas} 
              style={{
                position: 'absolute',
                transition: 'transform 0.5s',

                transform: `translateX(${((data.id - 1) * 190 - rightData)}px)`,
                }}
               
               >
             <div style={{ position: "relative", width: "160px", height: "270px" }}>
              <Image
                src={data.src}
                alt={data.alt}
                fill
                style={{
                  transform: `scale(${((data.id - 1) * 190 - rightData) !== 0 ? .9 : 1})`,
                  transition: 'transform 0.5s',
                }}
              />
             </div>
           </div>
          ))
         }


      {/* <div className={styles.swiperDatas} style={{position:'absolute', transform: 'translateX(0px)'}}>
        <div style={{ position: "relative", width: "160px", height: "270px" }}>
          <Image
            src={materials1}
            alt="info1"
            layout="fill" // Use layout="fill" to make the Image component fill its container
            objectFit="cover" // Use objectFit="cover" to handle overflow within the container
          />
        </div>
      </div>
      <div className={styles.swiperDatas} style={{position:'absolute', transform: 'translateX(190px)'}}>
        <div style={{ position: "relative", width: "160px", height: "270px" }}>
          <Image
            src={materials1}
            alt="info1"
            layout="fill" // Use layout="fill" to make the Image component fill its container
            objectFit="cover" // Use objectFit="cover" to handle overflow within the container
          />
        </div>
      </div>
      <div className={styles.swiperDatas} style={{position:'absolute', transform: 'translateX(380px)'}}>
        <div style={{ position: "relative", width: "160px", height: "270px" }}>
          <Image
            src={materials1}
            alt="info1"
            layout="fill" // Use layout="fill" to make the Image component fill its container
            objectFit="cover" // Use objectFit="cover" to handle overflow within the container
          />
        </div>
      </div>
      <div className={styles.swiperDatas} style={{position:'absolute', transform: 'translateX(570px)'}}>
        <div style={{ position: "relative", width: "160px", height: "270px" }}>
          <Image
            src={materials1}
            alt="info1"
            layout="fill" // Use layout="fill" to make the Image component fill its container
            objectFit="cover" // Use objectFit="cover" to handle overflow within the container
          />
        </div>
      </div>
      <div className={styles.swiperDatas} style={{position:'absolute', transform: 'translateX(760px)'}}>
        <div style={{ position: "relative", width: "160px", height: "270px" }}>
          <Image
            src={materials1}
            alt="info1"
            layout="fill" // Use layout="fill" to make the Image component fill its container
            objectFit="cover" // Use objectFit="cover" to handle overflow within the container
          />
        </div>
      </div> */}
      
    </div>
  );
};

export default Swiper;
