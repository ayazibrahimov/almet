import React from 'react'
import styles from './styles.module.css'
import useStore from '@/zustand/store'

const Timeline = ({index, sliderDatas}) => {
  
  
  const { changeIndex } = useStore()


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
          <span onClick={()=>changeIndex(data.id - 1)}
             style={(index+1 === Number(data.id)) ? active : {}}
             className={styles.box}
             >{data.id}</span>
        ))
      }

    </div>
  )
}

export default Timeline;