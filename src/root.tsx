import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Header />
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root