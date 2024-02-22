import React from 'react'

import styles from '../styles.module.css'
import Link from 'next/link'
import useProductData from '@/hooks/api'

const index = () => {

    const { datas: staticTextsData, loading: staticTextsLoading, error: staticTextsError } = useProductData("/contacts");

    if (staticTextsLoading) {
      return null; // or return loading indicator, message, etc.
    }
    
    if (staticTextsError) {
      return null; // or return error message, try again button, etc.
    }
    

  return (
    <div>
        <ul className={styles.infoAdresses}>
           
           {/*font-family: Roboto;*/}
           <li>
            <Link href={`tel:${staticTextsData?.data?.phone_number}`}>
              {staticTextsData?.data?.phone_number}
            </Link>
           </li>
           <li>
           <Link href={`mailto:${staticTextsData?.data?.email}`}>
             {staticTextsData?.data?.email}
           </Link>
           </li>
           <li> 
            {staticTextsData.data.address}
           </li>
         </ul>
    </div>
  )
}

export default index