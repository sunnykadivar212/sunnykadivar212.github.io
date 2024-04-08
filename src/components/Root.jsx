import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Root