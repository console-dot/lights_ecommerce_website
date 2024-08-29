import React from 'react'

export const SideComponent = ({setSelectedComponent}) => {
    return (
        <div className=' '>
            <ul className='flex w-full h-full flex-col gap-2 border rounded-lg border-[#636363] p-2 bg-transparent'>
                <li className='cursor-pointer hover:bg-[#CCCCCC] rounded-lg p-2' onClick={()=>setSelectedComponent("profile")}>
                    <h1>Profile</h1>
                </li>
                <li className='cursor-pointer hover:bg-[#CCCCCC] rounded-lg p-2' onClick={()=>setSelectedComponent("order")}>
                    <h1>Order</h1>
                </li>
            </ul>
        </div>
    )
}
