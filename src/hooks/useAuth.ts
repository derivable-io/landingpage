import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorsByName } from 'utils/web3React'
// import { setupNetwork } from 'utils/wallet'
// import useToast from 'hooks/useToast'
// import { profileClear } from 'state/profile'
import { useAppDispatch } from 'state'


const connectorLocalStorageKey = 'connectorIdv2'
enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

const useAuth = () => {
  const dispatch = useAppDispatch()
  const { chainId, activate, deactivate } = useWeb3React()
  // const { console.log } = useToast()

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            // const hasSetup = await setupNetwork()
            // if (hasSetup) {
            //   activate(connector)
            // }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              console.log('Provider Error', 'No provider was found')
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = null
              }
              console.log('Authorization Error', 'Please authorize to access your account')
            } else {
              console.log(error.name, error.message)
            }
          }
        })
      } else {
        console.log('Unable to find connector', 'The connector config is wrong')
      }
    },
    [activate],
  )

  const logout = useCallback(() => {
    // dispatch(profileClear())
    // dispatch(resetUserNftState())
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
    // if (chainId) {
    //   dispatch(clearAllTransactions({ chainId }))
    // }
  }, [deactivate, dispatch, chainId])

  return { login, logout }
}

export default useAuth
