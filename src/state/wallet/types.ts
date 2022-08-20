// eslint-disable-next-line import/no-cycle
import { FetchStatus } from '../types'

export interface walletStateInterface {
  balance: {
    deviable: string,
    bnb: string,
    accountFetched: string
    fetchStatus: FetchStatus
  },
  deviableBalance: {
    value: string,
    accountFetched: string
    fetchStatus: FetchStatus
  },
}

export const initialState: walletStateInterface = {
  deviableBalance: {
    value: '0',
    accountFetched: '',
    fetchStatus: FetchStatus.NOT_FETCHED,
  },
  balance: {
    deviable: '0',
    bnb: '0',
    accountFetched: '',
    fetchStatus: FetchStatus.NOT_FETCHED,
  },
}
