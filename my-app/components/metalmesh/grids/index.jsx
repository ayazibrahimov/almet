import Items from './items/items'


function Grid({gridImage,myName=false}) {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

     
           {
            gridImage.map((data,index)=>(
             <Items data={data} myName={myName} index={index} />
            ))
           }

    </div>
  )
}

export default Grid