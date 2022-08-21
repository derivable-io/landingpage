import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'


function Blocklist({ children }: { children: ReactNode }) {
  return <>{children}</>
}

ReactDOM.render(
  <React.StrictMode>
    <Blocklist>
      <Providers>
        <App />
      </Providers>
    </Blocklist>
  </React.StrictMode>,
  document.getElementById('root'),
)
