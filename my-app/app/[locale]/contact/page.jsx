import React from 'react'
import ContactUs from '@/container/contact-us'
import { cookies } from 'next/headers'

const fetchPost = async (lang) => {
  
  const cookieStore = cookies()
  
  try {
     const response = await fetch('https://admin.almetbaku.az/api/menus', {
     headers: {
        'Accept-Language': lang ? lang : 'en'
       }
     });
      const datas = await response.json();
      return datas.data[3];
  } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as per your requirement
      return null; // Or throw the error again
  }

  
 }

export async function generateMetadata({ params: { locale } }){

  const postDatas = await fetchPost(locale);



  
  return{
    title: postDatas ? postDatas.seo_title : "", // Check if postDatas is not null
    description: postDatas ? postDatas.description : "", // Check if postDatas is not null
    keywords: postDatas && postDatas.keywords ? postDatas.keywords.join(",") : ""
  }
}


const page = () => {
  return (
    <div>
        <ContactUs />
    </div>
  )
}

export default page