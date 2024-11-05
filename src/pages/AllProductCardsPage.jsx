import React, { useContext, useEffect } from 'react'
import { Layout } from '../themes'
import { AllProductCards, Login, SignUp } from '../components'
import AddCardContext from '../context/addCart/AddCardContext'

export const AllProductCardsPage = () => {
  const data = useContext(AddCardContext)
  useEffect(()=>{
    data.setActiveButton(" ")
  },[data.activeButton])
  return (
    <Layout>
          <AllProductCards/>
          <Login/>
          <SignUp/>
    </Layout>
  )
}
