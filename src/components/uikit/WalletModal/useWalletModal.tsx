import React from 'react'
import useModal from '../Modal/useModal'
import ConnectModal from './ConnectModal'
import WalletModal from './WalletModal'
import { Login } from './types'

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentWalletModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />)
  const [onPresentWalletModal] = useModal(<WalletModal logout={logout} />)
  return { onPresentConnectModal, onPresentWalletModal }
}

export default useWalletModal
