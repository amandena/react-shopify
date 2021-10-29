import React from 'react'
import { connect } from 'react-redux'
import store from './store'
import './App.css'
import Cart from './components/Cart'

class App extends React.Component {
  constructor() {
    super()
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this)
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this)
    this.handleCartClose = this.handleCartClose.bind(this)
  }

  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState()
    const checkoutId = state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}})
    })
  }

  removeLineItemInCart(lineItemId) {
    const state = store.getState()
    const checkoutId = state.checkout.id
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}})
    })
  }

  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'})
  }

  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'})
  }

  render() {
    const state = store.getState()
    return (
      <div className='App'>
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    )
  }
}

export default connect((state) => state)(App)
