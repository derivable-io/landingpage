import React, { useState } from 'react'
import MenuHeader from './MenuHeader'
import './style.scss'
import { Sidebar } from './Sidebar'
import { useWindowSize } from '../../hooks/useWindowSize'

const Layout = (props) => {
  const { children } = props
  const { width } = useWindowSize()
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false)
  const [activeSidebarDesktop, setActiveSidebarDesktop] = useState<boolean>(true)

  return (
    <div className='layout'>
      <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} activeSidebarDesktop={activeSidebarDesktop}/>
      <div className='class="flex-lg-1 h-screen overflow-y-lg-auto"'>
        <MenuHeader setActiveSidebar={setActiveSidebar}
                    activeSidebarDesktop={activeSidebarDesktop}
                    setActiveSidebarDesktop={setActiveSidebarDesktop}/>
        <main className={`${width < 768 ? 'mt-6' : 'mt-6'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
