import React from 'react'
import MetalMesh from '@/components/metalmesh'
import Areas from '@/components/aplication/'
import Products from '@/components/products'
import Services from '@/components/services'




export default async function Home() {
  return (
    <div style={{ overflowX:'hidden'}}>
      <MetalMesh />
      <Areas />
      <Products />
      <Services />
    </div>
  )
}
