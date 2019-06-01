import React from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonLogin from './components/login-button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonLogin />
      </header>
    </div>
  )
}

export default App
