import React from 'react'
import { useRouter } from 'next/router'

const page = ({params}) => {

  const router = useRouter()


  return (
    <div>
         <p>Post: {router.query.slug}</p>
    </div>
  )
}

export default page;