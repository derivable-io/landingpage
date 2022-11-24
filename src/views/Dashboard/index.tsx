import React from 'react'
import './style.scss'
import {useWindowSize} from "../../hooks/useWindowSize";
import {BlurBackground} from "../../components/ui/BlurBackground";


const features = [
  {
    image: 'decentralized.png',
    title: 'Pure Decentralization',
    des: 'Non-custodial smart-contracts with no permissioned role. No backend service.'
  },
  {
    image: 'optimized.png',
    title: 'Cost-Effective',
    des: 'Changing exposure (or position) only costs as much as an AMM swap.'
  },
  {
    image: 'decentralized.png',
    title: 'User Friendly',
    des: 'Long-short tokens can be traded professionally or HODL\'ed for long-term exposure with NO risk of liquidation.'
  },
  {
    image: 'automated.png',
    title: 'Open & Inclusive',
    des: 'Any token can be listed. Anyone can take sides, either as liquidity providers or long-short traders.'
  },
  {
    image: 'over-collateralized.png',
    title: 'Self-Sustaining',
    des: 'Under-collateralization is expected and naturally processed by pure mathematical methods.'
  },
  {
    image: 'capital-efficient.png',
    title: 'Capital-Effective',
    des: 'Lock less to gain more. Keep holding yield-bearing or liquidity tokens to acquire more market exposure.'
  },
]

const Dashboard = () => {
  const { width } = useWindowSize()
  const isPhone = width && width < 768

  return <div className='landing-page'>
    <div className='head'>
      <div className='head__content'>
        <img className='head__typo' src="/images/dashboard/head-typo.png" alt="" />
        <h1 className='head__title'>Trade, Earn, and Create your own Derivative Market.</h1>
      </div>
      <div className="overlay" />
    </div>
    <BlurBackground pointNumber={20}>
      <div className='content'>
        <div className='protocol'>
          <div className='protocol__top'>
            <div className='section-header'>
              <p className='section-header-item'>Decentralized </p>
              <p className='section-header-item'>Derivatives</p>
              <p className='section-header-item'>Liquidity</p>
            </div>
          </div>
          <div className='protocol__des'>
            The world&rsquo;s first derivatives protocol designed for the cost and scarceness of Layer-1 blockchain
            resources.
          </div>

          <div className='diagram-1'>
            <img src="/images/dashboard/diagram-4.png" alt="" className='protocol__diagram--img' />
          </div>
        </div>

        <div className='tdm'>
          <div className='section-header'>
            <p className='section-header-item'>Traditional </p>
            <p className='section-header-item'>Derivatives</p>
            <p className='section-header-item'>Market</p>
          </div>

          <div className='tdm__diagram'>
            <img src="/images/dashboard/diagram.svg" alt="" className='tdm-diagram--img' />
          </div>
        </div>



        <div className='description'>
          <div className='description-1'>
            <h2 className='title'>NO POSITION. NO ORDER BOOK.</h2>
            <p className='des'>Just token and liquidity.</p>
            <div className='diagram'>
              <button type='button'>Collateral Liquidity Pool</button>
              <span className='swap-icon' />
              <button type='button'>Fungible Derivatives Token</button>
            </div>
            <img src="/images/dashboard/diagram-1.png" alt="" className='diagram-1' />
          </div>
          <div className='description-2'>
            <h2 className='title'>ANY DERIVABLE VALUE</h2>
            <p className='des'>Derivatives formula is limited only by your imagination.</p>
            <img src="/images/dashboard/diagram-2.png" alt="" className='diagram-2' />
          </div>
          <div className='description-3'>
            <h2 className='title'>ANY COLLATERAL ASSET</h2>
            <p className='des mb-0'>Collateralized by any redeemable on-chain asset: from the platform native currency to any
              DeFi yield-bearing token.</p>
            <img src="/images/dashboard/diagram-3.png" alt="" className='diagram-3' />
          </div>
        </div>
        <div className="features">
          <div className="features__title">FEATURES</div>
          <div className='features__items'>
            {
              features.map((feature) => {
                return <div className='features__item'>
                  <div className='features__item--head'>
                    <img src={`/images/dashboard/${feature.image}`} alt="" className='features__item--logo' />
                    <span className='features__item--title'>{feature.title}</span>
                  </div>
                  <div className='features__item--des'>
                    {feature.des}
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </BlurBackground>
  </div>
}

export default Dashboard
