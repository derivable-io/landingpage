import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './types'
// eslint-disable-next-line import/no-cycle
import { FetchStatus } from '../types'

export const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setdeviableBalance: (state, action: PayloadAction<{ balance: string, account: string, fetchStatus: FetchStatus }>) => {
      state.deviableBalance = {
        value: action.payload.balance,
        accountFetched: action.payload.account,
        fetchStatus: action.payload.fetchStatus,
      }
    },
    setBalance: (state, action: PayloadAction<{ deviable: string,  bnb: string, account: string, fetchStatus: FetchStatus }>) => {
      state.balance = {
        deviable: action.payload.deviable,
        bnb: action.payload.bnb,
        accountFetched: action.payload.account,
        fetchStatus: action.payload.fetchStatus,
      }
    },
  },
})

// Actions
export const {  setdeviableBalance, setBalance } = wallet.actions

export default wallet.reducer
