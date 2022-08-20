import { useEffect } from 'react'
import { getBep20Contract, getPancakePairContract } from 'utils/contractHelpers'
import { useDispatch, useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { FetchStatus, State } from '../types'
import { tokens } from '../../config/constants/tokens'
import { setBalance} from './reducer'
import { provider } from '../../config/constants/providers'

export const useBalance = () => {
  const { balance } = useSelector((state: State) => {
    return {
      balance: state.wallet.balance,
    }
  })
  return {
    balance,
  }
}


export const useFetchBalance = () => {
  const tokenAddress = tokens.deviable.address
  const { account } = useWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    if (account) {
      dispatch(setBalance({ deviable: '0', bnb: '0', account: '', fetchStatus: FetchStatus.FETCHING }))
      fetchBalance()
    } else {
      dispatch(setBalance({ deviable: '0', bnb: '0', account: '', fetchStatus: FetchStatus.FETCHED }))
    }

    const interval = setInterval(() => {
      if (account) {
        fetchBalance()
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [account])

  const fetchBalance = async () => {
    const contract = getBep20Contract(tokenAddress)
    try {
      const [deviable, bnb] = await Promise.all([
        contract.balanceOf(account),
        provider.getBalance(account),
      ])

      dispatch(setBalance({
        deviable: deviable.toString(),
        bnb: bnb.toString(),
        account, fetchStatus: FetchStatus.FETCHED,
      }))
    } catch (e) {
      console.error(e)
    }
  }
}

