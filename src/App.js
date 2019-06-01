import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'

class FragmentComponent extends Component {
  render() {
    return (
      <Fragment>
        <p>{this.props.msg1}</p>
        <p>{this.props.msg2}</p>
      </Fragment>
    )
  }
}

class BasicComponent extends Component {
  render() {
    return <p>Hello! {this.props.name}</p>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BasicComponent name="Arthur" />
        <FragmentComponent msg1="Good" msg2="Bad" />
      </header>
    </div>
  )
}

export default App
