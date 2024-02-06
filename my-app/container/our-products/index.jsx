// import Sheet from '@/components/sheet'
import Types from '@/components/sheet/types'
import ProductsInfo from '@/components/sheet/infoproduct'
import {MajorSlider1,MajorSlider2} from '@/components/sheet/slider'



export default async function OurProducts(){



  return (
    <>
      <div style={{background:'#1A1A1A', overflowX:'hidden'}}>
        <div className='pb-20'>
             {/* <Sheet /> */}
             <ProductsInfo />
             <div>
               <div className='mt-20'><h3 style={{
                  color: '#fff',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '42px', /* 116.667% */
                  textTransform: 'uppercase',
                  padding:'0 40px'
               }}>PRODUCTS MANUFACTURED BY "ALMET BAKU" OJSC COMPANY</h3></div>  
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
                 padding:'0 40px'
               }}>PRODUCTS IMPORT AND SELLING BY "ALMET BAKU" OJSC COMPANY</h3></div>  
               <MajorSlider2 />
             </div>
             <div>
               <div className='mt-20'><h3 style={{
                  color: '#fff',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '42px', /* 116.667% */
                  textTransform: 'uppercase',
                  padding:'0 40px'
               }}>“ALMET BAKU” OJSC COMPANY PRODUCES TWO TYPES OF METAL MESH</h3></div>  
                <Types />
             </div>
        </div>
      </div>

    </>
  )
}

