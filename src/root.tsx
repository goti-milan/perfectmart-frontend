import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import SideBar from './components/sideBar'

const Root = () => {
  return (
    <div>
      <Header />
        <SideBar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Root