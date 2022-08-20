import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './style.scss'
import { ReactComponent as LogoIconSrc } from '../../../assets/images/logo.svg'
import { ReactComponent as Logo2IconSrc } from '../../../assets/images/logo2.svg'

export const LoadingIcon = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    size?: number
  }
) => {
  const {className, size} = props

  return (
    <div
      className={`icon loading-icon ${className}`}
      style={{ width: size || 16, height: size || 16 }}
    />
  )
}

export const LogoIcon = (props: any) => {
  const svgStarText = ReactDOMServer.renderToString(<LogoIconSrc />)
  return <img alt='' src={`data:image/svg+xml;base64,${btoa(svgStarText)}`} />
}
export const Logo2Icon = () => {
  const svgStarText = ReactDOMServer.renderToString(<Logo2IconSrc />)
  return <img alt='' src={`data:image/svg+xml;base64,${btoa(svgStarText)}`} />
}
