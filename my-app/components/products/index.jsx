'use client'
import React,{useState,useEffect} from 'react'
import Title from '@/components/title'
import TitleAbove from '../titleabove'
import Grid from '../metalmesh/grids'
import instance from '@/api/agent'




const Products = () => {
  const [title, setTitle] = useState();
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
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
     async function fetchData() {
      try {
        const response = await instance.get('/products', {
          params: {
            show_in_home_page: 1
          }
        });
        const info = response.data;
        setDatas(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData2();
    fetchData();
  }, []);

  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }


  const { data: myTitle } = title || {};
  const { data: myGrid } = datas || {};
  const products2 = myTitle?.home_products;
  const acquainted = myTitle?.home_products_subtitle;

  console.log(myGrid);



  return (
    <section>
      <div className='lg:container lg:mx-auto sm:py-16 sm:px-8 py-8 px-4'> 
        <Title title={products2} />
        <TitleAbove text={acquainted} />
        <Grid gridImage={myGrid} myName={true} />
      </div>
    </section>
  )
}

export default Products