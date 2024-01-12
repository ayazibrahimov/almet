'use client'
import React from 'react';
import Image  from 'next/image';

const ImageText = ({size,imgData}) => {
  return (
    <>
      
      <div style={size}>
        <Image
          style={{borderRadius:'5px'}}
          src={imgData} 
          alt='image' 
          fill />
      </div>
    </>
  );
};

export default ImageText;