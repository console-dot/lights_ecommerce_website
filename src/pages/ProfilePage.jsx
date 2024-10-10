import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../themes'
import { Order, Profile, SideComponent } from '../components'
import AddCardContext from '../context/addCart/AddCardContext'



export const ProfilePage = () => {
  const [selectedComponent,setSelectedComponent]= useState('profile')
  const data = useContext(AddCardContext)
  useEffect(()=>{
    data.setActiveButton(" ")
  },[data.activeButton])
  return (
    <Layout>
       <div className='flex justify-center  '>
            <div className="container h-screen px-10 gap-5" style={{
                display: 'flex',
                flexDirection: "row",
                alignItems:"start"
            }}>
                <div className='w-1/5  text-white'>
                    <SideComponent setSelectedComponent={setSelectedComponent}/>
                </div>
                <div className='  w-4/5 '>
                   {selectedComponent==="profile"?<Profile/>:""}
                   {selectedComponent==="order"?<Order/>:""}
                </div>
            </div>
        </div>
    
    </Layout>
  )
}


