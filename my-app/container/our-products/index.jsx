// import Sheet from '@/components/sheet'
'use client'
import React, { useState, useEffect } from 'react'
import Types from '@/components/sheet/types'
import ProductsInfo from '@/components/sheet/infoproduct'
import { MajorSlider1, MajorSlider2 } from '@/components/sheet/slider'
import instance from '@/api/agent'

export default function OurProducts() {

  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);
  const[major1,setMajor1] = useState("")
  const[major2,setMajor2] = useState("")
  const[type,setType] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/products');
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

  useEffect(() => {
    // Run filterSlider when datas is available
    if (datas) {
      filterSlider();
      fetchSecondData();
      fetchThirdData();
    }
  }, [datas]);


  async function fetchSecondData() {
    try {
      const response = await instance.get('/product-types');
      const info = response.data;
      setMajor1(info.data[0].title);
      setMajor2(info.data[1].title);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  async function fetchThirdData() {
    try {
      const response = await instance.get('/static-texts');
      const info = response.data;
      setType(info);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }

  }


  if (loading) {
    return false;
  }

  if (error) {
    return false;
  }

  function filterSlider() {
    // datas.filter fonksiyonu bir dizi döndürür
    datas.data.map((dat) => {
      if (dat.product_type_id === 1) {
        setSlider1((prev) => [...prev, dat]);
      } else {
        setSlider2((prev) => [...prev, dat]);
      }
    });
  }

  const { data } = datas || {};

 
  const {data: title} = type || {}
  const productCategoryTitle = title?.products_product_category_title;




  return (
    <>
      <div style={{ background: '#1A1A1A', overflowX: 'hidden' }}>
        <div>
          {/* <Sheet /> */}
          <ProductsInfo title={type} data={data} />
          <div>
            <div className='mt-20'><h3 style={{
              color: '#fff',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '42px', /* 116.667% */
              textTransform: 'uppercase',
              padding: '0 40px'
            }}>{major1}</h3></div>
            <MajorSlider1 data={slider1} />
          </div>
          <div>
            <div className='mt-20'><h3 style={{
              color: '#fff',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '42px', /* 116.667% */
              textTransform: 'uppercase',
              padding: '0 40px',
            }}>{major2}</h3></div>
            <MajorSlider2 data={slider2} />
          </div>
          <div style={{background:'#fff'}}>
            <div className='mt-20'><h3 style={{
              color: '#4F4F4F',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '42px', /* 116.667% */
              textTransform: 'uppercase',
              padding: '0 40px',
              paddingTop: '100px'
            }}>{productCategoryTitle}</h3></div>
            <Types />
          </div>
        </div>
      </div>
    </>
  )
}
