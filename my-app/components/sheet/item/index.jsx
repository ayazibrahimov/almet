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
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "600px",
            }}
          >
            <Image src={table.src} alt={table.alt} cover />
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Item;
