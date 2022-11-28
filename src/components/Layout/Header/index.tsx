import React, {useState} from 'react'
import './style.scss'
import {useWindowSize} from "../../../hooks/useWindowSize";

const menus = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Exposure',
    href: '/exposure'
  },
  {
    name: 'Swap',
    href: '/swap'
  },
  {
    name: 'Pools',
    href: '/pools'
  },
  {
    name: 'Docs',
    href: 'https://docs.derivable.io'
  },
]

const Header = (props: any) => {
  const { width } = useWindowSize()

  const isPhone = width && width < 768

  return (<header className='header'>
      <div className='logo-box'>
        {
          width &&
          <img src={isPhone ? '/logo-white.png' : '/logo.png'} alt="" />
        }
      </div>
      {
        isPhone ?
          <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
              <ul className="navigation__list">
                {
                  menus.map((menu) => {
                    return <li className="navigation__item">
                      <a href={menu.href} className="navigation__link">
                        {menu.name}
                      </a>
                    </li>
                  })
                }
              </ul>
            </nav>
          </div>
          :
          <div className='menu'>
            {
              menus.map((menu) => {
                return <a href={menu.href} className='menu--item'>{menu.name}</a>
              })
            }
          </div>
      }

    </header>
  )
}

export default Header
