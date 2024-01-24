'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Spinner from '@/components/spinner';

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
        {!myName && <p className={`roboto ${styles.para}`}>{data.header}</p>}
        {data.status === false && <div className={styles.dropfilter}></div>}
        {myName && <h4 className={`roboto ${styles.heading}`}>{data.header}</h4>}
        {/* {loading ? <div className={styles.placeholder}></div> : null} */}
          <Image
            className={styles.productImage}
            src={data.src}
            alt={data.alt}
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
