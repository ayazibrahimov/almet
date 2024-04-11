import React from 'react'
import OurProducts from '@/container/our-products'
import { cookies } from 'next/headers'

const fetchPost = async (lang) => {
  
  
  try {
     const response = await fetch('https://admin.almetbaku.az/api/menus', {
     headers: {
        'Accept-Language': lang
       }
     });
      const datas = await response.json();
      return datas.data[2];
  } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as per your requirement
      return null; // Or throw the error again
  }

  
 }

export async function generateMetadata(){
  const nextCookies = cookies();
  const langCookie = nextCookies.get('lang');
  const lang = langCookie ? langCookie.value : 'en';

  const postDatas = await fetchPost(lang);
// Await the fetchPost function


  
  return{
    title: postDatas ? postDatas.seo_title : "", // Check if postDatas is not null
    description: postDatas ? postDatas.description : "", // Check if postDatas is not null
    keywords: postDatas && postDatas.keywords ? postDatas.keywords.join(",") : ""
  }
}


const page = () => {
  return (
    <div>
        <OurProducts />
    </div>
  )
}

export default page