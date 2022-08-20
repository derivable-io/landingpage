import React, { lazy, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { ModalProvider } from 'components/uikit/Modal/ModalContext'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { ToastContainer } from 'react-toastify'
import Layout from './components/Layout'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import history from './routerHistory'
import 'react-toastify/dist/ReactToastify.css'
import './style/main.scss'
import { useFetchBalance } from './state/wallet/hooks'
import Dashboard from './views/Dashboard'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const NotFound = lazy(() => import('./views/NotFound'))
// This config is required for number formatting
BigNumber.config({
  DECIMAL_PLACES: 5,
  EXPONENTIAL_AT: 1000,
  FORMAT: {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: '',
  },
})

const App: React.FC = () => {
  useEagerConnect()
  useScrollOnRouteChange()
  useFetchBalance()

  return (
    <Router history={history}>
      <ModalProvider>
        <Layout>
          <SuspenseWithChunkError fallback='...loading'>
            <Switch>
              <Route path='/' exact>
                <Dashboard />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
          <ToastContainer
            theme='dark'
            position='top-right'
            autoClose={5000}
            rtl={false}
            closeOnClick={false}
            draggable
          />
        </Layout>
      </ModalProvider>
    </Router>
  )
}

export default React.memo(App)
