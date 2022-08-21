import React from 'react'
import './style.scss'
import {useWindowSize} from "../../hooks/useWindowSize";
import {BlurBackground} from "../../components/ui/BlurBackground";


const features = [
  {
    image: 'decentralized.png',
    title: 'Decentralized',
    des: 'Non-custodial smart-contract with no central authority.'
  },
  {
    image: 'optimized.png',
    title: 'Optimized',
    des: 'Designed for the cost and scarceness of Layer-1 platforms.'
  },
  {
    image: 'automated.png',
    title: 'Automated',
    des: 'Safekeeping by market incentive.'
  },
  {
    image: 'over-collateralized.png',
    title: 'Over-collateralized',
    des: 'Timely tested contract keeping model, from asset-based lending and mortgage-backed security to MakerDAO, Compound, and Aave in the DeFi world.'
  },
  {
    image: 'capital-efficient.png',
    title: 'Capital Efficient',
    des: 'Lock less to earn more. Lock yield-bearing or liquidity provider tokens to gain more market exposure.'
  }
]

const Dashboard = () => {
  const { width } = useWindowSize()
  const isPhone = width && width < 768

  return <div className='landing-page'>
    <div className='head'>
      <div className='head__content'>
        <img className='head__typo' src="/images/dashboard/head-typo.png" alt="" />
        <h1 className='head__title'>Trade, Earn, and Create your own Derivative Tokens.</h1>
      </div>
      <div className="overlay" />
    </div>
    <BlurBackground pointNumber={20}>
      <div className='content'>
        <div className='protocol'>
          <div className='protocol__top'>
            <div className='protocol__left'>
              <p className='protocol__left-item'>Decentralized </p>
              <p className='protocol__left-item'>Derivatives</p>
              <p className='protocol__left-item'>Liquidity</p>
            </div>
            <div className='protocol__right'>
              Protocol
            </div>
          </div>
          <div className='protocol__des'>
            The world&rsquo;s first derivatives protocol designed for the cost and scarceness of Layer-1 blockchain
            resources.
          </div>
          <div className='protocol__diagram'>
            <div className='protocol__diagram--title'>
              <h2
                className='protocol__diagram--title-1'>{isPhone ? 'Derivatives Market' : 'Traditional Derivatives Market'} </h2>
              <h2 className='protocol__diagram--title-2'>{isPhone ? 'DDL' : 'Decentralized derivaties liquidity'}</h2>
            </div>
            <img src="/images/dashboard/diagram.png" alt="" className='protocol__diagram--img' />
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
            <p className='des'>Collateralized by any redeemable on-chain asset: from the platform native currency to any
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
