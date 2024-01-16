import React from 'react'
import Bridge from '../../public/bridge.png'
import Image from 'next/image'

const Cover = () => {
  return (
    <div  style={{position:'relative', width: '100%', height: '700px'}}>
        <Image 
          src={Bridge} 
          alt="Bridge"  
          fill
          placeholder="blur"
          />
    </div>
  )
}

export default Cover