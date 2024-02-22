import React from 'react'
import styles from './styles.module.css'
import Item from '../item'
import {Tables} from '@/mocks/table'
import useProductData from '@/hooks/api';

const Types = () => {

  const { datas, loading, error } = useProductData('/product-categories');

  if (loading) {
    return;
  }

  if (error) {
    return;
  }

 
  const {data} = datas
 


  return (
     <div className='lg:container lg:mx-auto lg:px-14 px-8'>
        <div className={styles.container}>
            {/* <h3 className={styles.title}>“Almet Baku” OJSC company produces two types of metal mesh:</h3> */}
            <Item data={data} tables={Tables} />
        </div>
     </div>
  )
}

export default Types