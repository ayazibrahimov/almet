import React from 'react';
import HomeContainer from '@/container/home';
import { cookies } from 'next/headers';

const fetchPost = async (lang) => {
  try {
    const response = await fetch('https://admin.almetbaku.az/api/menus', {
      headers: {
        'Accept-Language': lang
      }
    });
    const datas = await response.json();
    return datas.data[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function generateMetadata() {
  const nextCookies = cookies();
  const langCookie = nextCookies.get('lang');
  const lang = langCookie ? langCookie.value : 'en';

  const postDatas = await fetchPost(lang);

  return {
    title: postDatas ? postDatas.seo_title : "",
    description: postDatas ? postDatas.description : "",
    keywords: postDatas && postDatas.keywords ? postDatas.keywords.join(",") : ""
  }
}

export default function HomePage() {
  return (
    <HomeContainer />
  )
}