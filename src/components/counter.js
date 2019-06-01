import React, { Component, Fragment } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increaseCounter = e => {
    // this.setState({ counter: this.state.counter + 1 })

    // setState function safe more than above
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  decreaseCounter = e => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }

  handleInput = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <Fragment>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <input onKeyPress={this.handleInput} />
      </Fragment>
    )
  }
}

export default Counter
