import React from 'react'
import styles from './styles.module.css'


const Timeline = ({index, sliderDatas,changeIndex}) => {
  
  

  const active = {
    transform: 'scale(1.4)',
    backgroundColor: '#DAA520',
    fontSize: '16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }



  return (
    <div className={styles.container}>

        {
        sliderDatas.map((data,i)=>(
          <span onClick={()=>changeIndex(i+1   - 1)}
             style={(index+1 === Number(i+1)) ? active : {}}
             className={styles.box}
             >{i+1}</span>
        ))
      }

    </div>
  )
}

export default Timeline;