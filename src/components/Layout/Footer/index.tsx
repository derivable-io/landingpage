import React, {useState} from 'react'
import './style.scss'

export const Footer = (props: any) => {
  return (<footer className='footer-box'>
      <div className='footer'>
        <div className='footer__left'>
          <div className='footer__left--top'>
            <img src="/logo.png" alt="" />
            <div className="footer__left--description">Open derivatives market for everyone.</div>
          </div>
          <div className='footer__left--socials'>
          </div>
        </div>
        <div className='footer__right'>
          <div className='footer__right--col'>
            <div className="title">ORGANIZATION</div>
            <div className='links'>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">About</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Features</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Works</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Career</a>
            </div>
          </div>
          <div className='footer__right--col'>
            <div className="title">HELP</div>
            <div className='links'>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Customer Support</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Terms</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Conditions</a>
              <a href="https://t.me/derivablecs" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
          </div>
          <div className='footer__right--col'>
            <div className="title">SUBSCRIBE TO NEW FEATURES</div>
            <div className="subscribe-box">
              <input type="text" className='name-input' placeholder='Enter your email' />
              <button type='button' className='btn-subscribe'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
