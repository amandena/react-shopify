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
