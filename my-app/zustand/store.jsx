import { create } from 'zustand'
import {sliderDatas,Materials} from '@/mocks/sliderFourth'




const useStore = create((set) => ({
    index: 0,
    leftData : 0,
    rightData : 0,
    sliderDatas,
    Materials,
    increment: () => set((state) => ({ index: state.index + 1, rightData:state.rightData + 190})),
    decrement: () => set((state) => ({ index: state.index - 1, rightData:state.rightData - 190})),
    changeIndex:(data) =>set((state)=>({index:data})  )
  }))
  

  export default useStore;



