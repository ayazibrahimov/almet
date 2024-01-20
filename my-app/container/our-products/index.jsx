import Sheet from '@/components/sheet'
import Types from '@/components/sheet/types'
import ProductsInfo from '@/components/sheet/infoproduct'
import MajorSlider from '@/components/sheet/slider'



export default async function OurProducts(){
  return (
    <>
      <div style={{background:'#1A1A1A'}}>
        <div className='py-20'>
             <Sheet />
             <Types />
             <ProductsInfo />
        </div>
      </div>

      <MajorSlider />
    </>
  )
}

