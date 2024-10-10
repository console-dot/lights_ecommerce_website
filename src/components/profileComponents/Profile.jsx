import React, { useState } from 'react'
import { user1, user3 } from '../../assets'
import { MdAddAPhoto } from 'react-icons/md'

export const Profile = () => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("hello Jhon")

    return (
        <div className='border border-[#636363] flex items-start  rounded-lg w-full h-full p-5 flex-col '>
            <div className='w-full flex justify-between'>
                <h1 className='heading text-white text-2xl'>Profile Setting</h1>
                <div>
                    <button className={` px-4 py-2 font-semibold hover:text-white bg-white text-black rounded-full md:mb-0 mb-4 ${edit ? "flex" : "hidden"}`} onClick={() => setEdit(false)} z>
                        <span>Save</span>
                    </button>
                    <button className={`shop-button  px-6 py-2 bg-transparent border border-[#f99106]  text-[#f99106] hover:text-white font-semibold  rounded-full md:mb-0 mb-4  ${edit ? "hidden" : "flex"}`} onClick={() => setEdit(true)}>
                        <span>Edit</span>
                    </button>
                </div>
            </div>

            <div className='w-full flex justify-center items-center mt-5'>
                <div className='w-[200px] h-[200px] flex justify-center items-center'>
                    <div className='w-full h-full rounded-full flex justify-center items-center 
                    border-2  border-dashed border-[#636363] relative '>
                        <div className='absolute bottom-4 right-3 z-20'>
                            <MdAddAPhoto className='text-[#CCCCCC] text-2xl' />
                        </div>
                        <img src={user3} className='w-[95%] rounded-full h-[95%]' />
                    </div>
                </div>
            </div>
            <div className='mt-5 w-full flex justify-center items-center'>
                <table className='w-3/5 flex justify-between my-auto'>
                    <tr className='text-white heading flex flex-col gap-5'>
                        <td className=''>Name </td>
                        <td className=''>Last Name </td>
                        <td>Phone Number </td>
                        <td>Email </td>
                    </tr>
                    <tr className='text-[#CCCCCC] italic flex flex-col gap-5'>
                        {edit ? <><input type="text" className='bg-transparent border rounded-lg w-28 h-6 p-0'onChange={(e)=>setName(e.target.value)} value={name} /></> : <td className='w-28 h-6'>{name} </td>}
                        <td>Last jhon </td>
                        <td>1836475235 </td>
                        <td>jhon@gmail.com </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}


