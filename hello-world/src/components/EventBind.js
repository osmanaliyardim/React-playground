import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: "Welcome!"
    }

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(){
  //   this.setState({
  //     message: "Goodbye!"
  //   })
  // }

  clickHandler = () => { // No need to use .bind(this)
    this.setState({
      message: "Goodbye!"
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Logout</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>EventBind Click</button>
      </div>
    )
  }
}

export default EventBind
