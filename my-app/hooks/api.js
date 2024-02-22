import { useState, useEffect } from 'react';
import instance from '@/api/agent'// instance import edildiğinden emin olun

const useProductData = (endpoint) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(endpoint);
        const info = response.data;
        setDatas(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  // useEffect(() => {
  //   // Run filterSlider when datas is available
  //   if (datas) {
  //     filterSlider(); // Burada filterSlider fonksiyonunu çağırmak yerine, bu kısmı kendi projenize uygun şekilde güncelleyebilirsiniz.
  //   }
  // }, [datas]);

  return { datas, loading, error };
};

export default useProductData;
