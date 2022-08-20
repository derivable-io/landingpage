import React, { useState } from 'react'
import useWalletModal from 'components/uikit/WalletModal/useWalletModal'
import useAuth from 'hooks/useAuth'
import { useWeb3React } from '@web3-react/core'
import { bn, shortAddress } from '../../../utils/helper'
import { useBalance } from '../../../state/wallet/hooks'
import { BUY_PANCAKESWAP_URL, CHART_URL } from '../../../config/constants/config'

const MenuHeader = (props: { setActiveSidebar: any, activeSidebarDesktop: any, setActiveSidebarDesktop: any}) => {
  const { setActiveSidebar, setActiveSidebarDesktop, activeSidebarDesktop } = props
  const { login, logout } = useAuth()
  const { account } = useWeb3React()
  const [showDropDown, setShowDropDown] = useState<boolean>(false)

  const { onPresentConnectModal, onPresentWalletModal } = useWalletModal(login, logout)

  return (<header className='header d-flex justify-content-between'>
      <div className='header--left'>
        <div className='icon-menu' onClick={() => {
          setActiveSidebarDesktop(!activeSidebarDesktop)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
               className="fill-current">
            <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z"></path>
          </svg>
        </div>
        <a href='/' className='logo-box'>
          <img height='30' src='/logo.png' alt='DEVIABLE' />
        </a>
      </div>
      <div className='px-4 py-3'>
        <div className='d-flex flex-row-reverse'>
          <div className='mb-menu'>
            <span
              className='mb-menu-btn'
              onClick={() => setActiveSidebar(true)}
            >
              <img width='25' src='/icons/menu.png' alt='' />
            </span>
          </div>
          <div className='text-end'>
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              className='btn btn-header dropdown-toggle'
              type='button' id='dropdownMenuButton1'
              data-bs-toggle='dropdown' aria-expanded='false'
            >
              <img className='icon' width='20' height='20' src='/icons/info.png' alt='' />
            </button>
            <ul className={`dropdown-menu bg-dark ${showDropDown && 'show'}`} aria-labelledby='dropdownMenuButton1'>
              <li>
                <a href={BUY_PANCAKESWAP_URL} rel='noreferrer' target='_blank' className='dropdown-item'>
                  Buy on Pancakeswap <img className='icon' width='13' height='13' alt=''
                                          src='./images/icons/resize.png' />
                </a>
              </li>
              <li>
                <a href={CHART_URL} rel='noreferrer' target='_blank' className='dropdown-item'>
                  Chart <img className='icon' width='13' height='13'
                             src='./icons/resize.png' alt='' />
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
            </ul>
            {
              account ? (
                <button
                  className='btn btn-header'
                  type='button'
                  onClick={onPresentWalletModal}
                >
                  {shortAddress(account)}
                </button>
              ) : (
                <button
                  onClick={onPresentConnectModal}
                  type='button'
                  className='btn btn-header'
                >
                  Connect Wallet
                </button>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )

}

export default MenuHeader
