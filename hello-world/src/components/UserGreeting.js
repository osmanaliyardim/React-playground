import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return <div>{this.state.isLoggedIn ? "Welcome Osman!" : "Welcome GUEST!"}</div>
  }
}

export default UserGreeting
