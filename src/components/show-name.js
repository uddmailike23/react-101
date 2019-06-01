import React, { Component, Fragment } from 'react'

class ShowName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Lilly',
      displayDate: new Date().toString()
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDisplayDate, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateDisplayDate = () => {
    this.setState({ displayDate: new Date().toString() })
  }

  render() {
    return (
      <Fragment>
        <p>My sname is {this.state.name}</p>
        <p>{this.state.displayDate}</p>
      </Fragment>
    )
  }
}

export default ShowName
