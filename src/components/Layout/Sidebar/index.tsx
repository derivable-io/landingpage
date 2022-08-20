import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss'
import ReactModal from 'react-modal-resizable-draggable'
import {
  DOCS_URL,
  TELE_URL,
  TWITTER_URL,
  DISCORD_URL, YOUTUBE_URL, ANN_URL,
} from '../../../config/constants/config'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { tokens } from '../../../config/constants/tokens'

export const Sidebar = (props: { activeSidebar: any, setActiveSidebar: any, activeSidebarDesktop: any}) => {
  const { activeSidebar, setActiveSidebar, activeSidebarDesktop } = props
  const location = useLocation()
  const [visibleSwap, setVisibleSwap] = useState<boolean>(false)
  const {width, height} = useWindowSize()

  useEffect(() => {
    setActiveSidebar(false)
  }, [location.pathname])

  return (
    <div><div className={`d-flex flex-column flex-shrink-0 pt-3 text-white sidebar ${activeSidebar && 'active'} ${!activeSidebarDesktop && 'not-active'}`}>
      <div
        className='btn-close btn-close-white btn-close-sidebar'
        onClick={() => setActiveSidebar(false)}
      >
      </div>
      <ul className='menu nav nav-pills flex-column mb-auto sidebar-menu mt-5'>
        <li>
          <Link to='/' className={`nav-link ${location.pathname === '/' && 'active'}`}>
            <img className='icon' width='18' src='/icons/dashboard.png' alt='dashboard' />
            <span className='text'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/claim-reward' className={`nav-link ${location.pathname.includes('claim-reward') && 'active'}`}>
            <img className='icon' width='18' src='/icons/account.png' alt='account' />
            <span className='text'>Claim Reward</span>
          </Link>
        </li>
        <li>
          <Link to='/calculator' className={`nav-link ${location.pathname.includes('calculator') && 'active'}`}>
            <img className='icon' width='18' src='/icons/calculator.png' alt='Calculator' />
            <span className='text'>Calculator</span>
          </Link>
        </li>
        <li>
          <span className='nav-link' onClick={() => setVisibleSwap(true)}>
            <img className='icon' width='18' src='/icons/swap.png' alt='swap' />
            <span className='text'>Swap</span>
          </span>
        </li>
        <li>
          <a href={DOCS_URL} className='nav-link' target='_blank' rel='noreferrer'>
            <img className='icon' width='18' src='/icons/docs.png' alt='docs' />
            <span className='text'>Docs</span>
          </a>
        </li>
      </ul>

      <div className='social'>
        <ul className='social-list'>
          <li>
            <a href={YOUTUBE_URL} target='_blank' rel='noreferrer'>
              <img width='22' src='/icons/youtube.svg' alt='' />
            </a>
          </li>
          <li>
            <a href={TWITTER_URL} target='_blank' rel='noreferrer'>
              <img width='22' src='/icons/twitter.svg' alt='' />
            </a>
          </li>
          <li>
            <a href={TELE_URL} target='_blank' rel='noreferrer'>
              <img width='22' src='/icons/tele.svg' alt='' />
            </a>
          </li>
          <li>
            <a href={ANN_URL} target='_blank' rel='noreferrer'>
              <img width='22' src='/icons/ann.svg' alt='' />
            </a>
          </li>
          <li>
            <a href={DISCORD_URL} target='_blank' rel='noreferrer'>
              <img width='22' src='/icons/discord.svg' alt='' />
            </a>
          </li>

        </ul>
      </div>
    </div>
      {visibleSwap &&
      <ReactModal
        top={0}
        left={0}
        initWidth={width && width < 768 ? width : 450}
        initHeight={width && width < 768 ? height : 700}
        className='my-modal-custom'
        isOpen={visibleSwap}

        onRequestClose={() => {
        }}
      >
        <h3>Swap</h3>
        <span className='btn-close-1' onClick={() => setVisibleSwap(false)}>
            </span>
        <div className='body'>
          <iframe
            src={`https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=${tokens.deviable.address}`}
            title='swap'
          />
        </div>
      </ReactModal>
      }
    </div>
  )
}
