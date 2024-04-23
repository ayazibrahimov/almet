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
           <Link target="_blank" href={'https://www.google.com/maps/place/SDN+Biznes+Mərkəzi,+PSG+Kapital/@40.416411,49.8792873,15z/data=!4m6!3m5!1s0x403062a8914691f3:0xe936994ed9e8ac30!8m2!3d40.416411!4d49.8792873!16s%2Fg%2F11cm03nrcy?hl=az&entry=ttu'}>
            {staticTextsData.data.address}
           </Link>
           </li>
         </ul>
    </div>
  )
}

export default index