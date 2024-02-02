'use client'
import React,{useState} from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Spinner from '@/components/spinner';

const Item = ({ tables }) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    setLoading(false);
  };


  return (
    <div>
      {
      tables.map((table, id) => (
        <div key={id}>
          <h2 className={styles.title}>{table.title}</h2>
          <div className={styles.typeContainer}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Image 
             src={table.src} 
             alt={table.alt} 
             loading='lazy'
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
