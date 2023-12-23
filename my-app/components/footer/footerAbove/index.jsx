import React from 'react'
import Item from './items'
import Datas from '@/mocks/footer.json'
import CircleLogo from '@/public/CircleLogo.png'
import Link  from 'next/link'
import Image  from 'next/image'




const Above = () => {
  return (
       <div className='sm:container sm:mx-auto py-26 px-10 text-center'>
           <div className='grid grid-cols-5'>

             <Item datas={Datas} />
       
             <div className='col-span-6'>
                     
                    <div className='flex flex-col items-center mt-16'>
                      <div style={{width:'100px', height:'100px', borderRadius:'50%', position:'relative'}}> 
                        <Link href='/'>
                          <Image src={CircleLogo} fill />
                        </Link> 
                      </div>
                      
                      <p className='mt-6'>All Rights Reserved.Almet Trading Baku   - 2023</p>
                       <p className='mt-2 flex gap-3'>
                        <Link href='/' className='transition-colors duration-400 ease-in-out hover:text-[#828282]'>FAQ</Link>
                        <Link href='/' className='transition-colors duration-400 ease-in-out hover:text-[#828282]'>Career</Link> 
                        <Link href='/' className='transition-colors duration-400 ease-in-out hover:text-[#828282]'>Privacy</Link> 
                        <Link href='/' className='transition-colors duration-400 ease-in-out hover:text-[#828282]'>Policy</Link> 
                      </p>
                         

                    </div>
                     
             </div>
            
           </div>          
       </div>
  )
}

export default Above;