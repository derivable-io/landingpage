import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { useDispatch } from 'react-redux'
import walletReducer from './wallet/reducer'

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists', 'profile']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    wallet: walletReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: true, serializableCheck: false}), save({ states: PERSISTED_KEYS })],
  preloadedState: load({
    states: PERSISTED_KEYS,
    preloadedState: {
    },
  }),
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store
