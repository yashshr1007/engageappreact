import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-iokf2trnw2yqo6zu.us.auth0.com"
    clientId="lsv3Yt6QcgRFDsbUJgTSDk5cypl3ZnaR"
    authorizationParams={{
      redirect_uri: "https://yashshr1007.github.io/engageappreact"
     // redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </StrictMode>,
)
