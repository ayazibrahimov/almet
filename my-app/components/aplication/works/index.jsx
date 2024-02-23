import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import circlemetal from '@/public/circlemetal.svg'





const Works = ({application,positionData,spinner=true}) => {


const elementStyle = positionData === 'firstElement' 
? { top: '50%'} 
: { top: '60px'};
  


  
  return (
    
    <div className={styles.container}>

        <ul className={styles.list}>
            {
              application?.map((data,index)=>(
                <li key={data.id}> <span style={{animationDuration:`${0+data.id}s` }}></span> {data.title}</li>
              ))
            }
        </ul> 
           {
            spinner && <div className={`${styles.metal} hidden sm:block`} style={elementStyle}  >
            <Image  
              src={circlemetal}
              alt={'circlemetal'}
              />
             </div>
          
           }


    </div>
  )
}

export default Works;
