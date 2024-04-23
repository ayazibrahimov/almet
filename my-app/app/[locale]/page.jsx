import React from 'react';
import HomeContainer from '@/container/home';
import { getTranslations } from 'next-intl/server';

const fetchPost = async (lang) => {
  try {
    const response = await fetch('https://admin.almetbaku.az/api/menus', {
      headers: {
        'Accept-Language': lang ? lang : 'en'
      }
    });
    const datas = await response.json();
    return datas.data[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function generateMetadata({ params: { locale } }) {
  const postDatas = await fetchPost(locale);

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
