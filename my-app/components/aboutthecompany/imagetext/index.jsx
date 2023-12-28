'use client'
import React from 'react';
import Image  from 'next/image';

const ImageText = ({size,imgData}) => {
  return (
    <>
      
      <div style={size}>
        <Image src={imgData} alt='image' fill />
      </div>
    </>
  );
};

export default ImageText;