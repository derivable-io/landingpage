import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { getBep20Contract } from '../utils/contractHelpers'
import { LAGE_VALUE } from '../config/constants/config'
import { provider } from '../config/constants/providers'
import { messageAndViewOnBsc } from '../utils/helper'

const bn = BigNumber.from

export const useApprove = ({ spender, tokenAddress }) => {
  const [isApproved, setIsApproved] = useState<boolean>(false)

  const { library, account } = useWeb3React()

  useEffect(() => {
    if (account) {
      fetchAllowance()
    }
  }, [account])

  const fetchAllowance = async () => {
    try {
      const contract = getBep20Contract(tokenAddress)
      const allowance = await contract.allowance(account, spender)
      setIsApproved(!allowance.isZero())
    } catch (e) {
      console.error(e)
      setIsApproved(false)
    }
  }

  const approve = async () => {
    if(!account) return false

    try {
      const signer = library.getSigner()
      const contract = getBep20Contract(tokenAddress, signer)
      const res = await contract.approve(spender, LAGE_VALUE)
      const tx = await provider.waitForTransaction(res.hash)

      if (tx.confirmations && tx.status === 1) {
        setIsApproved(true)
        toast.success(messageAndViewOnBsc({ title: 'Approve success', hash: res.hash }))
      } else {
        toast.error(messageAndViewOnBsc({ title: 'Approve failed', hash: res.hash }))
      }
      return res
    } catch (e: any) {
      console.error(e)
      const message = e.message ? e.message : (e.data?.message?.replace('check error: ', '') || 'Error')
      toast.error(message)
      return false
    }
  }

  return { isApproved, approve }
}
