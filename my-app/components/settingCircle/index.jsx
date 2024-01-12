import React from "react";
import setting1 from "@/public/setting1.svg";
import styles from './styles.module.css';
import Image from 'next/image'

const index = () => {
  return (
    <div className={styles.box}>
      <span className={styles.setting1}>
        <Image src={setting1} />
      </span>
      <span className={styles.setting2}>
        <Image src={setting1} />
      </span>
    </div>
  );
};

export default index;
