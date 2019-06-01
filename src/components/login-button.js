import React, { Component } from 'react'

class LogginButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggin: false
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggin: true,
      name: 'Arthur'
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggin: false,
      name: null
    })
  }

  render() {
    // basic style check condition first
    // if (this.state.isLoggin) {
    //   return (
    //     <div>
    //       <p>Hello! {this.state.name}</p>
    //       <button onClick={this.handleLogout}>Log out</button>
    //     </div>
    //   )
    // } else {
    //   return <button onClick={this.handleLogin}>Log in</button>
    // }

    // condition return null
    // if (this.state.isLoggin) {
    //   return null
    // } else {
    //   return <button onClick={this.handleLogin}>Log in</button>
    // }

    // JSX condition syntax
    return (
      <div>
        {this.state.isLoggin ? (
          <div>
            <p>Hello! {this.state.name}</p>
            <button onClick={this.handleLogout}>Log out</button>
          </div>
        ) : (
          <button onClick={this.handleLogin}>Log in</button>
        )}
        {this.state.name && <p>Hello! again, {this.state.name}</p>}
      </div>
    )
  }
}

export default LogginButton
