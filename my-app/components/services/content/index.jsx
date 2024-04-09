import React,{useState,useEffect} from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import instance from '@/api/agent'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700', 
    subsets: ['latin'] })

const Content = ({metal}) => {

  const [text,setText] = useState('')

  useEffect(()=>{
    async function fetchData2() {
      try {
        const response = await instance.get('/static-texts');
        const datas = response.data;
        setText(datas.data.home_more_text)
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
     }
     
     fetchData2();
  },[])


  return (
    <div className={styles.content}>
        <h2 className='roboto text-center'>{metal.title}:</h2>
        <h3 className='roboto text-center mt-2'>{metal.subtitle}</h3>
        <p className='text-center mt-4'>{metal.description}</p>
         <div className='mt-4'>
         <Link href='/' className={styles.buttonData}>
            {text}
         </Link> 
         </div>

    </div>
  )
}

export default Content