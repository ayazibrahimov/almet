'use client'
import React from "react";
import styles from "./styles.module.css";
import setting1 from "@/public/setting1.svg";
import Image from "next/image";
import {motion} from 'framer-motion'
import SettingCircle from "@/components/settingCircle";

const index = () => {
  return (
    <div className={styles.container}>
      <motion.h2 
        initial={{opacity:0, height:0}}
        animate={{opacity:1, height:100 }} 
        transition={{ delay:1, duration:.2 }}
        className={styles.title}>
        Let's start new projects <br />
        <span className={styles.titleSpecial}> together</span>
        
        <motion.div 
           animate={{opacity:1 }} 
           transition={{ delay:1.5, duration:.2 }}
         className={styles.settings}>
         <span style={{display:'inline-block', position:'relative',width:'40px',height:'40px'}} className={styles.setting1}>
           <Image 
            src={setting1}
            alt="setting1"
            fill  
           />
         </span>
         <span style={{display:'inline-block', position:'relative',width:'40px',height:'40px'}} className={styles.setting2}>
           <Image  
             src={setting1}
             alt='setting1'
             fill
             />
         </span>
      </motion.div>
      </motion.h2>
    </div>
  );
};

export default index;
