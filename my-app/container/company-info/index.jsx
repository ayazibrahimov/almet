import React from 'react'
import Privacy from '@/components/privacypolicy'

export default async function Company({slug}){
  return (
    <>
        <Privacy slug={slug} />
    </>
  )
}
