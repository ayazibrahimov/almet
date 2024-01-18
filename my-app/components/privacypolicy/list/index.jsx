import React from 'react'
import Items from '../items'

const index = ({items}) => {
  return (
    <div className='mt-16'>
        <ul>
            <Items items={items} />
        </ul>
    </div>
  )
}

export default index