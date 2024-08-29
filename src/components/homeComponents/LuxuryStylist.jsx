import React from 'react'
import { blog1 } from '../../assets'

export const LuxuryStylist = () => {
    return (
        <div className='w-full flex justify-center items-center '>
            <div className='container h-[400px]'>
                <div className='w-full h-full flex md:flex-row flex-col'>
                    <div className='md:w-1/2 w-full h-full flex flex-col items-center justify-center bg-[#171717] order-2 md:order-none py-4 md:py-0'>
                        <div className='w-full lg:w-[70%] flex flex-col items-start justify-center px-10'>
                            <div>
                                <h1 className='text-white heading text-2xl md:text-5xl'>Our luxury Stylist</h1>
                            </div>
                            <div className='w-full lg:ml-48 md:ml-32 h-[1px] my-5 bg-[#2F2F2F] z-30'></div>
                            <div>
                                <h1 className='text-lg italic text-[#C0C0BB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing elit, ctetur adipisci incididunt ut labore et dolore aliqua.</h1>
                            </div>
                            <div className='mt-5'>
                                <button className="shop-button px-4 py-2 bg-[#FFC000] text-black rounded-full">
                                    <span>Read More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full order-1 md:order-none'>
                        <img src={blog1} className='w-full h-full' />
                    </div>
                </div>
            </div>

        </div>
    )
}
