import React from 'react'
import Privacy from '@/components/privacypolicy'

export default async function Company({slug}){
  return (
    <div style={{ overflowX:'hidden'}}>
        <Privacy slug={slug} />
    </div>
  )
}
