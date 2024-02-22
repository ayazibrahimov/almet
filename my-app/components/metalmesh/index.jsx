'use client'
import React,{useState,useEffect} from "react";
import styles from "./styles.module.css";
import Slider from "./slider";
import InfoText from "./infotext";
import Features from "./features";
import useProductData from '@/hooks/api';



function MetalMesh() {


  const { datas, loading, error } = useProductData("/static-texts");

  if (loading) {
    return null; // or return loading indicator, message, etc.
  }
  
  if (error) {
    return null; // or return error message, try again button, etc.
  }

  const { data } = datas || {};



  return (
    <section>
      <div className={styles.container}>
        <div className="lg:container lg:mx-auto lg:px-8 px-3">
          <Slider data={data} />
          <InfoText data={data} />
          <Features info={data} />
        </div>
      </div>
    </section>
  );
}

export default MetalMesh;
