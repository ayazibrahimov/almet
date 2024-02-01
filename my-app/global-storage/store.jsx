import { create } from 'zustand'
import {sliderDatas,Materials,Materials2,sliderDatas2} from '@/mocks/sliderFourth'




const useStore1 = create((set) => ({
    index: 0,
    leftData : 0,
    rightData : 0,
    sliderDatas,
    Materials,
    increment: () => set((state) => ({ index: state.index + 1, rightData:state.rightData + 190})),
    decrement: () => set((state) => ({ index: state.index - 1, rightData:state.rightData - 190})),
    changeIndex:(data) =>set((state)=>({index:data})  ),
    swiperIndexPlus:(num) =>set((state)=>({index: state.index + num })),
  }))
  

  const useStore2 = create((set) => ({
    index: 0,
    leftData : 0,
    rightData : 0,
    sliderDatas2,
    Materials2,
    increment: () => set((state) => ({ index: state.index + 1, rightData:state.rightData + 190})),
    decrement: () => set((state) => ({ index: state.index - 1, rightData:state.rightData - 190})),
    changeIndex:(data) =>set((state)=>({index:data})  ),
    swiperIndexPlus:(num) =>set((state)=>({index: state.index + num })),
  }))

  export {useStore1,useStore2};



