import React, { useState } from 'react'
import Header from './Header'
import './style.scss'
import { useWindowSize } from '../../hooks/useWindowSize'
import {Footer} from "./Footer";

const Layout = (props) => {
  const { children } = props
  const { width } = useWindowSize()

  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
