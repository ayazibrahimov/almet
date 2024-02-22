'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Title from '../title'
import Works from './works'
import bridgeImage  from '../../public/bridgeCover.jpg'
import instance from '@/api/agent'



const Areas = () => {

  const [datas, setDatas] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/areas-of-application');
        const info = response.data;
        setDatas(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    async function fetchData2() {
      try {
        const response = await instance.get('/static-texts');
        const info = response.data;
        setTitle(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    fetchData2();
  }, []);

  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }

  const { data } = datas || {};
  const { data: myTitle } = title || {};
  const application = myTitle?.home_application;
  

  return (
    <section>
        <div className='lg:container lg:mx-auto sm:py-16 sm:px-8 py-8 px-4'>
              <Title title={application}/>
              <div style={{position: 'relative',width:'100%', height:'900px'}}>
                <Image 
                 fill
                 alt='image1'
                 loading='eager'
                 src={bridgeImage}
                />
              <Works positionData='firstElement' application={data}/>
              </div>
  
             {/* <Bridge /> */}
        </div>
    </section>
  )
}

export default Areas;