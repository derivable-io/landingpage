import { ethers } from 'ethers'
import { provider as simpleRpcProvider } from 'config/constants/providers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import pancakePairAbi from 'config/abi/pancakePair.json'
import deviableAbi from 'config/abi/deviable.json'
import rewardAbi from 'config/abi/reward.json'
import BalanceTrackerAbi from 'config/abi/balanceTracker.json'
import { tokens } from '../config/constants/tokens'
import contractAddress from '../config/constants/contractAddress'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}

export const getSaloContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(deviableAbi, tokens.deviable.address, signer)
}

export const getRewardContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(rewardAbi, contractAddress.reward, signer)
}

export const getBalanceTrackerContract = () => {
  return getContract(BalanceTrackerAbi, contractAddress.balanceTracker)
}

export const getPancakePairContract = (pairAddress: string,signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(pancakePairAbi, pairAddress, signer)
}


