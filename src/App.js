import React from 'react'
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
    return (
      <div className='App'>
        Shopify App
      </div>
    )
  }
}

export default App
