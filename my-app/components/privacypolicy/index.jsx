import React from 'react'
import styles from './styles.module.css'
import { Roboto } from "next/font/google";
import Image from 'next/image'
import InfoText from './infotext';
import Qfil1 from '@/public/qıfıl-03.png'
import companyDatas from '@/mocks/companyData.json'

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const index = ({slug}) => {

  const matchingResult = companyDatas.results.find(result => result[slug]);

  // if (!matchingResult) {
  //   // Handle the case where no matching result is found
  //   return <div>No matching result found for the slug: {slug}</div>;
  // }

  // Access the data based on the found result
  const datas = matchingResult[slug];

  return (
    <div className={styles.container}>
         
         <div className='lg:container lg:mx-auto lg:px-8 px-3 py-36'>
                <div className='w-2/3'>
                   <h2>{datas.header}</h2>
                   <span className={roboto.className}>
               {datas.title}
            </span>
                </div>

            
                 <div 
                   className={styles.imageBox} 
                   style={{position:'absolute', width:'250px', height:'350px'}}>
                   <Image 
                     src={Qfil1}
                     fill
                   />
                 </div>
          

               <InfoText datas={datas} />

             {
              datas.companyTitle1 && datas.companyTitle2 && (
                <div className= {styles.infoData}>
                 <p className= {roboto.className}>{datas.companyTitle1}</p>
                 <p className= {roboto.className}>{datas.companyTitle2}</p>
                </div>

              )
             }
         </div>
    </div>
  )
}

export default index