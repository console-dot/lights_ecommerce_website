import React, { useState } from 'react'
import { Layout } from '../themes'
import { Banner, DiscountOffer, FeatureProducts, FutureProducts, NewArrivals, Testimonials } from '../components'
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



export const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <FutureProducts/>
      <NewArrivals/>
      <DiscountOffer/>
      <Testimonials/>
      
    </Layout>
  )
}
