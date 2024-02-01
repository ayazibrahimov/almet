import Sheet from '@/components/sheet'
import Types from '@/components/sheet/types'
import ProductsInfo from '@/components/sheet/infoproduct'
import {MajorSlider1,MajorSlider2} from '@/components/sheet/slider'



export default async function OurProducts(){



  return (
    <>
      <div style={{background:'#1A1A1A'}}>
        <div className='pb-20'>
             <Sheet />
             <ProductsInfo />
             <div>
               <div className='mt-20'><h3 style={{
                  color: '#fff',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '42px', /* 116.667% */
                  textTransform: 'uppercase',
                  padding:"0 56px"

               }}>“Almet Baku” OJSC company produces two types of metal mesh:</h3></div>  
               <MajorSlider1 />
             </div>
             <div>
               <div className='mt-20'><h3 style={{
                  color: '#fff',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '42px', /* 116.667% */
                  textTransform: 'uppercase',
                  padding:"0 56px"

               }}>“Almet Baku” OJSC company produces two types of metal mesh:</h3></div>  
               <MajorSlider2 />
             </div>
             <Types />
        </div>
      </div>

    </>
  )
}

