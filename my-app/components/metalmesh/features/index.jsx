'use state'
import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import Arrow from '@/public/bend-arrow.svg'
import Image from 'next/image'
import Grid from '../grids'
import { gridImage } from '@/mocks/gridData'
import instance from '@/api/agent'


function Features({info}) {

  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/features');
        const info = response.data;
        setDatas(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }

  const { data } = datas || {};



  return (
    <>
        <div className={styles.container}>
          <h2>
             {info.home_metal_mesh}
            <span> <Image src={Arrow} alt='Arrow'></Image></span>
          </h2>
          <h4>{info.home_metal_mesh_features}</h4>
        </div>
        
        <Grid  gridImage={data}/>

     </> 
  )
}

export default Features