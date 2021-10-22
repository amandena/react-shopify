import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: 'your-access-token',
  domain: 'your-shopify-url.myshopify.com'
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
