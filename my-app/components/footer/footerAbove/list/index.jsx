import React from 'react'
import styles from './styles.module.css'
import { Roboto } from "next/font/google";


const text = Roboto({ weight: "400", subsets: ["latin"] });



const List = ({infos}) => {
  return (
          <ul className="mt-3">
            {
                infos.map((data,index)=>(
                    <li className={`${text.className} ${styles.item}`}>
                       {data.text}
                    </li>
                ))
            }
          </ul>
  )
}

export default List