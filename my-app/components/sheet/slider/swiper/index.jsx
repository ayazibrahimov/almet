'use clinet'
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import materials1 from "@/public/materials1.jpg";
import Image from "next/image";

const Swiper = ( {index,materials, leftData,rightData} ) => {

  const [statusSlider, setStatus] = useState(true)
 


  return (
    <div className={styles.container}>
         
         {
          materials.map((data,i)=>(
            <div className={styles.swiperDatas} 
              style={{
                position: 'absolute',
                transition: 'transform 0.5s',

                transform: `translateX(${(((data.id - 1) * 190 )) - (190 * index) }px)`,
                }}
               
               >
             <div style={{ position: "relative", width: "180px", height: "270px" }}>
              <Image
                src={data.src}
                alt={data.alt}
                fill
                style={{
                  transform: `scale(${(((data.id - 1) * 190 )) - (190 * index) !== 0 ? .9 : 1})`,
                  transition: 'transform 0.5s',
                }}
              />
             </div>
           </div>
          ))
         }

    </div>
  );
};

export default Swiper;
