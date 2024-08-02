import React, { useState } from 'react'
import { Layout } from '../themes'
import { Banner, FeatureProducts, FutureProducts, NewArrivals } from '../components'
import { benner } from '../assets'
const images =[
{
  image:benner
},
{
  image:benner
},
{
  image:benner
},
{
  image:benner
},
{
  image:benner
},
]
let index='' ;
const hello = (item,index) =>{
 index += index+":"+item

}



export const HomePage = () => {
  return (
    <Layout>
      <Banner/>
      <div>
         {/* {images.map((i,index)=>(<div className='flex'>
             <div className='w-[70%]'>
              <img src={}/></div><div className=''></div>
         </div>))} */}
         {/* {images.forEach(hello)}
         {index} */}
      </div>
      <FutureProducts/>
      <NewArrivals/>
      
    </Layout>
  )
}
