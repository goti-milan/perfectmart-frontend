import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './components/sideBar'
import { Box, CssBaseline } from '@mui/material'
import { customerRoutes } from './utils/extraFunctions'

const Root = () => {
  const [drawerWidth, setDrawerWidth] = useState(0);
  const location = useLocation();


  useEffect(() => {
    if (location && customerRoutes(location as any)) setDrawerWidth(240)
    else setDrawerWidth(0)

  }, [location])

  const sidebar = useCallback(
    (location : any) => {
      return customerRoutes(location) ? <SideBar /> : ""
    },
    [location])



  return (
    <React.Fragment>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box display="flex" flexGrow={1}>
          {sidebar(location as any)}
          <Box component="main" flexGrow={1} p={3} sx={{ ml: `${drawerWidth}px` }}>
            <Outlet />
          </Box>
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

export default Root