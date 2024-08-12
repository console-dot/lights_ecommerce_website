import React from 'react'
import { benner } from "../../assets" 
export const GellaryAboutUs = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='container '>
        <div className='flex w-full h-[200px] gap-5 p-2'>
              <div className='w-1/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
              <div className='w-2/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
              <div className='w-1/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
        </div>
        <div className='flex w-full h-[200px] gap-5 p-2 '>
              <div className='w-1/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
              <div className='w-2/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
              <div className='w-1/4 h-full'><img src={benner} className='w-full h-full rounded-lg'/></div>
        </div>
        </div>
        
    </div>
  )
}
