'use client'
import React,{useState,useEffect} from "react";
import styles from "./styles.module.css";
import instance from '@/api/agent'



const Upper = () => {

  const [major, setMajor] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/static-texts');
        const info = response.data;
        setMajor(info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  

  
 if (loading) {
   return false;
 }

 if (error) {
   return false;
 }


 const { data } = major || {};



  return (
      <div className={`lg:container lg:mx-auto py-32 lg:px-10 px-6 text-center ${styles.container}`}>
        {/* <div className={styles.circle}>{data.home_abt}</div> */}
        <div className="md:mt-20 md:mb-32 mt-10 mb-10">
          <h2 className={styles.heading}>
            {data.home_lets} <span>{data.home_lets_create}</span>{data.home_lets_create_together}
          </h2>
        </div>

        <div>
          <span className={styles.link} href="/">
            almetbaku
          </span>
        </div>
      </div>

  );
};

export default Upper;
