import React, { Component } from 'react'

export class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick
