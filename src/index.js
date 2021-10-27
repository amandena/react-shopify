import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Client from 'shopify-buy'
import { Provider } from 'react-redux'
import store from './store'

const client = Client.buildClient({
  storefrontAccessToken: 'your-access-token',
  domain: 'your-shopify-url.myshopify.com'
})
store.dispatch({type: 'CLIENT_CREATED', payload: client})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={flattenMessages(messages[locale.substring(0, 2)])}>
        <App locale={locale}/>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
