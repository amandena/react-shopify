import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: 'your-access-token',
  domain: 'your-shopify-url.myshopify.com'
})

store.dispatch({type: 'CLIENT_CREATED', payload: client})
client.product.fetchAll().then((res) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
})
client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
})
client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
})

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
