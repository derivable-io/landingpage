import React from 'react'
import './style.scss'
import { LoadingIcon } from '../Icons'

interface SwapButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small'
  styletype?: 'animation' | ''
  disabled?: boolean
  loading?: boolean
}

export const Button = (props: SwapButtonProps) => {
  const { className, size, children, styletype, disabled, loading } = props
  return (
    <button
      {...props}
      className={`${className} deviable-btn ${size || ''} ${
        styletype || ''
      }`}
      type='button'
      disabled={loading || disabled}
    >
      <span className='deviable-button__children'>
      <span>{children}</span> {loading ? <LoadingIcon size={22} /> : ''}
      </span>
    </button>
  )
}
