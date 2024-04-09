import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { Roboto } from "next/font/google";


const text = Roboto({ weight: "400", subsets: ["latin"] });



const List = ({infos,link}) => {
  return (
          <ul className="mt-3">
            {
                infos.map((data,index)=>(
                  <Link href={`/${link}`} > <li key={index} className={`${text.className} ${styles.item}`}>
                       {data.text}
                    </li>
                  </Link> 
                ))
            }
          </ul>
  )
}

export default List