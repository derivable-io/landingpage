import {ethers} from 'ethers'

export const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/')

export const wssProvider = new ethers.providers.WebSocketProvider(
  'wss://bsc-ws-node.nariox.org:443'
)
