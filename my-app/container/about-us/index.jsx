import React from 'react'
import Aboutthecompany from '@/components/aboutthecompany'
import Certification from '@/components/certification'


export default async function About(){
  return (
    <div style={{ overflowX:'hidden'}}>
        <Aboutthecompany />
        <Certification />
    </div>
  )
}

