"use client"
import HireMe from '@/components/home/HireMeSection'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../store/reducer'

const page = () => {
  return (
    <div>
    <Provider store={store}>
      <HireMe/>
      </Provider>
    </div>
  )
}

export default page
