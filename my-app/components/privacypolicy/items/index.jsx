import React from 'react'
import styles from './styles.module.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});


const index = ({items}) => {
  return (
       <>
         
         {
          items.map(item=>(
            <li key={item.id} className={styles.item}>
             <h4><div className='inline-block'>{item.id}.</div>{item.head}</h4>
              <span className={roboto.className}>{item.text}</span>
            </li>
          ))
         }
       
       </>
     
  )
}

export default index