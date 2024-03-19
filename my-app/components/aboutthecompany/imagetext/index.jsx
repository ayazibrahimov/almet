'use client'
import React,{useState} from 'react';
import Image  from 'next/image';
import Spinner from '@/components/spinner';

const ImageText = ({size,imgData}) => {


  

  const [loading, setLoading] = useState(true);

  const onImageLoad = () => {
    setLoading(false);
  };


  return (
    <>
      
      <div style={size}>
        <Image
          style={{borderRadius:'5px'}}
          src={`https://admin.almetbaku.az/storage/${imgData}`}
          alt='image' 
          loading='lazy'
            onLoad={onImageLoad}
            fill
            />
            {loading ? <Spinner /> : null}
      </div>
    </>
  );
};

export default ImageText;