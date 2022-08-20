import React, { useMemo, useState } from 'react'
import useWalletModal from 'components/uikit/WalletModal/useWalletModal'
import { useWeb3React } from '@web3-react/core';
import useAuth from 'hooks/useAuth';
import { Link, useLocation, useParams } from 'react-router-dom'
import { shortAddress } from '../../../utils/helper'

const MobileGlobalMenu = (props) => {
  const {login, logout} = useAuth()
  const location = useLocation();

  const {farmType} = useParams<{farmType: string}>()

  const { account } = useWeb3React()

  const {onPresentConnectModal, onPresentWalletModal} = useWalletModal(login,logout)

  const {collapseMobileMenu} = props


  const [isshowNftMarketMenu, setisshowNftMarketMenu] = useState(false)

  const collapseNftMarketMenu = () => {
    setisshowNftMarketMenu(!isshowNftMarketMenu)
  }

  const [isshowmyProfileMenu, setisshowmyProfileMenu] = useState(false)

  const collapseMyProfileMenu = () => {
    setisshowmyProfileMenu(!isshowmyProfileMenu)
  }

  return (
    <div className="global-menu">
      <div className="logo">
        <img src="/images/globalMenu/menu-logo.png" alt="" />
      </div>
      <div className="menu-item for-mobile">
        {
          account ? (
            <div className="address button2" onClick={onPresentWalletModal}>
              {shortAddress(account)}
            </div>
          ) : (
            <div className="button2" onClick={onPresentConnectModal}>
              Connect Wallet
            </div>
          )
        }
      </div>
      <div className={`${location.pathname === '/' ? 'active' : ''} menu-item item1`}>
        <div className="text" onClick={collapseMobileMenu}><Link to="/">ABOUT LZ FARM</Link></div>
      </div>
      <div className={`${location.pathname === '/my-farm' ? 'active' : ''} menu-item item2`}>
        <div className="text" onClick={collapseMobileMenu}><Link to="/my-farm">MY FARM</Link></div>
      </div>
      <div className={`${location.pathname === '/pools' ? 'active' : ''} menu-item item5`}>
        <div className="text" onClick={collapseMobileMenu}><Link to="/pools">POOLS</Link></div>
      </div>
      <div className={`${location.pathname === '/upgrade' ? 'active' : ''} menu-item item5`}>
        <div className="text" onClick={collapseMobileMenu}><Link to="/upgrade">UPGRADE</Link></div>
      </div>
      {/* for mobile */}
      <div className="close-menu-icon" onClick={collapseMobileMenu}>
        <img src="/images/modal/closebutton.png" alt="" />
      </div>
    </div>
  )
}

export default MobileGlobalMenu
