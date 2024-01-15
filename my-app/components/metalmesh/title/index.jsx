'use client'
import React from 'react'
import styles from './styles.module.css' 
import {motion} from 'framer-motion'

function Title() {
  return (
    <div className={styles.container}>
        <motion.h1 
            initial={{opacity:0, height:0}}
            animate={{opacity:1, height:100 }} 
            transition={{ delay:1, duration:.2 }}
            > METAL MESH 
         </motion.h1>
        <motion.h1
           initial={{opacity:0, width:0}}
           animate={{opacity:1, width:'100%' }} 
           transition={{ delay:1, duration:.2 }}
        >PRODUCTION</motion.h1>
        <motion.h4
          initial={ {opacity:0 } }
          animate={ {opacity:1 } }
          transition={{ delay:1, duration:.2 }}
        >TRACE OF IRON</motion.h4>
    </div> 
  )
}

export default Title;