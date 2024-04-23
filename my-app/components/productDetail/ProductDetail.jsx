import React from 'react'
import Image from 'next/image'
import Detail from '@/public/productDetail.png'
import DropFilter from '@/components/dropfilter';
import styles from './styles.module.css'





const getData = async (lang)=>{
  // console.log(lang);
  try {
    const response = await fetch('https://admin.almetbaku.az/api/products',{
      method:'GET',
      headers: {
        'Accept-Language': lang
       }
    });
    const datas = await response.json();
    return datas.data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error appropriately
  }
} 




const ProductDetail = async ({id,lang}) => {
  
  const cards = await getData(lang)

  const infos = cards.find(product=>product.id == id)




  return (
    <div className='bg-[#F5F5F5]'>
        <div className='lg:container lg:mx-auto lg:px-16 sm:px-8 px-4 py-16 text-[#333333]'>
        <h2 className='text-center font-bold xl:text-[74px] lg:text-[64px] sm:text-[56px] text-4xl uppercase'>products  </h2>

        <div className='mt-[32px] '>
           <p className='sm:text-[32px] text-[26px] font-bold color'>{infos?.title}</p>
           <div className='grid lg:grid-cols-3 sm:grid-cols-4  grid-cols-1 lg:gap-20 sm:gap-10 gap-5 mt-3'>
              <div className='h-auto lg:col-span-1 sm:col-span-2'>

                <div className={styles.imageBox} >
                  {/* <DropFilter />  */}
                  <Image  
                   src={`https://admin.almetbaku.az/storage/${infos?.image}`}
                   style={{ borderRadius:'15px'}}
                   layout="fill" 
                   objectFit="cover"
                   priority
                   alt="Picture of the author"
                   />
                </div>
                
              </div>
              <div className='lg:col-span-2 sm:col-span-2'>
                   <p  className='py-1 lg:text-[22px] text-base lg:tracking-wider text-justify' >
                     Economical and durable, welded wire mesh is manufactured on state-of-the-art,
                     automated, grid welding equipment. Line and cross wires lay flat at each 
                     intersection and are resistance welded for maximum cross-sectional strength. Recently,
                     earthquakes have been inevitable. For this reason, the demand for quality construction 
                     materials has increased. Our company is always ready to 
                     Economical and durable, welded wire mesh is manufactured on state-of-the-art,
                     automated, grid welding equipment. Line and cross wires lay flat at each 
                     intersection and are resistance welded for maximum cross-sectional strength. Recently,

                    </p>   
              </div>
           </div>

           <div className= {`sm:text-2xl text-lg my-51 mt-5 px-4 ${styles.underLineDiv}`}><b className= {styles.punkt} >about</b> <span className={styles.underLine}>the product</span> </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail;