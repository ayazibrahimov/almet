'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import Spinner from '@/components/spinner';
import DropFilter from '@/components/dropfilter';


const Items = ({ index, data, myName }) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    setLoading(false);
  };

  return (
    <div key={index}>
      <div
        className={`${
          !myName ? styles.box1 : styles.box2
        } ${styles.container} ${data.status ? 'shadowed' : ''}`}
        style={!myName ? { position: 'relative', width: '100%' } : { position: 'relative', width: '100%' }}
      >
        {!myName && <p className={`roboto ${styles.para}`}>{data.title}</p>}
        {data.status === false && <div className={styles.dropfilter}></div>}
        {myName &&  <Link href='/'> <h4 className={`roboto ${styles.heading}`}>{data.title}</h4> </Link> }
        {/* {loading ? <div className={styles.placeholder}></div> : null} */}
        {/* deyisiklik */}
           { myName && <DropFilter/>}
          <Image
            className={styles.productImage}
            src={`https://admin.almetbaku.az/storage/${data.background_image}`}
            alt='image'
            loading='lazy'
            onLoad={onImageLoad}
            fill
          />
        {loading ? <Spinner /> : null}
      </div>
    </div>
  );
};

export default Items;
