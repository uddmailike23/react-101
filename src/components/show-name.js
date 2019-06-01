import React, { Component } from 'react'

class ShowName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Lilly'
    }
  }

  render() {
    return <p>My sname is {this.state.name}</p>
  }
}

export default ShowName
