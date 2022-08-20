import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'


function Blocklist({ children }: { children: ReactNode }) {
  return <>{children}</>
}

ReactDOM.render(
  <React.StrictMode>
    <video autoPlay muted loop className='video-bg'>
      <source src='/bg.mp4' type='video/mp4' />
    </video>
    <Blocklist>
      <Providers>
        <App />
      </Providers>
    </Blocklist>
  </React.StrictMode>,
  document.getElementById('root'),
)
