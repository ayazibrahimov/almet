import React from 'react'
import Services from '@/container/ourservices'
import { cookies } from 'next/headers'




const fetchPost = async () => {
  
  const cookieStore = cookies()
  
  try {
     const response = await fetch('https://admin.almetbaku.az/api/menus', {
     headers: {
        'Accept-Language': cookieStore.get('lang') || 'en'
       }
     });
      const datas = await response.json();
      return datas.data[0];
  } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error as per your requirement
      return null; // Or throw the error again
  }

  
 }

export async function generateMetadata(){
  const postDatas = await fetchPost(); // Await the fetchPost function


  
  return{
    title: postDatas ? postDatas.seo_title : "", // Check if postDatas is not null
    description: postDatas ? postDatas.description : "", // Check if postDatas is not null
    keywords: postDatas && postDatas.keywords ? postDatas.keywords.join(",") : ""
  }
}

const page = () => {
  return (
    <div>
       <Services />
    </div>
  )
}

export default page