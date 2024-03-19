'use client'
import React,{useState, useEffect} from 'react'
// import Title from '@/components/title'
// import TitleAbove from '../titleabove'
// import Works from '@/components/aplication/works'
// import application from '@/mocks/application.json'
import Slider from './slider'
import instance from '@/api/agent'


const Services = () => {
  const [title, setTitle] = useState();
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
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
    async function fetchData2() {
      try {
        const response = await instance.get('/home-page-product-texts');
        const info = response.data;
        setMydata(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    fetchData2()
  }, []);

  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }

  const { data: myTitle } = title || {};
  const products2 = myTitle?.home_products2;
  const subtitle= myTitle?.home_products2_subtitle;
  // const subtitle= myTitle?.home_products2_text;




  return (
    <section className='mt-16'>
        {/* <div className='lg:container lg:mx-auto lg:py-16 lg:px-8 px-4 py-8'>
          <Title title={products2} />
          <TitleAbove text={subtitle}/>
          <Works positionData='secondElement' application={mydata.data} /> 
        </div> */}
        <Slider />
    </section>
  )
}

export default Services;