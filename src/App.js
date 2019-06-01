import React from 'react'
import logo from './logo.svg'
import './App.css'
import ProductList from './components/product-list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductList />
      </header>
    </div>
  )
}

export default App
