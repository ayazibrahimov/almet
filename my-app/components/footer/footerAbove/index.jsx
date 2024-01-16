import React from 'react'
import Item from './items'
import Datas from '@/mocks/footer.json'
import FooterLogo from '@/public/Frame 239.jpg'
import Link  from 'next/link'
import Image  from 'next/image'
import styles from './styles.module.css'




const Above = () => {
  return (
       <div className='lg:container lg:mx-auto py-26 lg:px-10 px-4 text-center'>
           <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  md:gap-4 sm:gap-2'>

             <Item datas={Datas} />
            
           </div>    

            <div className='w-full'>
                     
                    <div className='flex flex-col items-center mt-16'>
                      <div className={styles.footerImageLogo}> 
                        <Link href='/'>
                          <Image src={FooterLogo} loading='eager' fill />
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
  )
}

export default Above;