'use client'
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Item = ({ tables }) => {
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
             loading="eager"
             fill />
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Item;
