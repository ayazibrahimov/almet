'use client'
import React,{useState} from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Spinner from '@/components/spinner';

const Item = ({ dats,data }) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    setLoading(false);
  };


  return (
    <div>
      {
      data.map((dat, index) => (
        <div key={dat.id}>
          <h2 className={styles.title}>{dat.title}</h2>
          <div className={styles.typeContainer}>            
          <Image 
              src={`https://admin.almetbaku.az/storage/${dat.image}`}
              alt='image'
              loading='lazy'
              width={800}
              height={1000}
              onLoad={onImageLoad}
              />  
             {loading ? <Spinner /> : null} 
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Item;
