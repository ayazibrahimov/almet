"use client";
import React from "react";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mainSlider1 from "@/public/mainSlider1.jpg";
import mainSlider2 from "@/public/mainSlider2.jpg";
import mainSlider3 from "@/public/mainSlider3.jpg";
import materials1 from "@/public/materials1.jpg";
import materials2 from "@/public/materials2.jpg";
import materials3 from "@/public/materials3.jpg";
import materials4 from "@/public/materials8.jpg";
import materials5 from "@/public/materials5.jpg";
import materials6 from "@/public/materials6.jpg";
import materials7 from "@/public/materials7.jpg";
import materials8 from "@/public/materials8.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/styles/slider2.css";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import index from "@/components/footer";

const MajorSlider = () => {
  return (
    <div  style={{position:'relative', width: "100%",height: "500px"}} >
      <div
        style={{  
           position:'absolute',
           top:'0px',
           bottom:'0px',
           left:'0px',
           right:'0px'
        }}
      >
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          modules={[EffectFade, Pagination]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div
                style={{ position: "relative", width: "100%", height: "550px" }}
              >
                <Image src={mainSlider1} fill />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative", width: "100%", height: "550px" }}
              >
                <Image src={mainSlider2} fill />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ position: "relative", width: "100%", height: "550px" }}
              >
                <Image src={mainSlider3} fill />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <div style={{position:'absolute',left:'0',right:'0',bottom:'10%',zIndex:'111'}}>
        <div className="flex gap-4 ps-4">
          
          <div className="w-1/12">
            <p>salam</p>
          </div>
          
          <div className="w-3/12">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
              eum! Totam, sunt ex. Earum esse nesciunt autem. Dolorem vero, fuga
              eveniet debitis voluptatem cupiditate itaque ex ea numquam sed
              rerum eum blanditiis! Non neque, odio officiis necessitatibus quod
              laboriosam expedita minus in magnam quasi. Beatae debitis facere
            </p>
          </div>

          <div className="w-8/12">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials1} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials2} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials3} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials4} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials5} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials6} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials7} alt="data" fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  <Image src={materials8} alt="data" fill />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorSlider;
