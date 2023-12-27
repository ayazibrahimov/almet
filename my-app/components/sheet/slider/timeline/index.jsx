import React from 'react'
import styles from './styles.module.css'

const Timeline = ({index, sliderDatas}) => {
   
  const active = {
    transform: 'scale(1.4)',
    backgroundColor: '#DAA520',
    fontSize: '16px',
  }


  return (
    <div className={styles.container}>

        {
        sliderDatas.map((data,i)=>(
          <span 
             style={(index+1 === Number(data.id)) ? active : {}}
             className={styles.box}
             >{data.id}</span>
        ))
      }

    </div>
  )
}

export default Timeline;