import React, { Component } from 'react';

class Counter extends Component {

  constructor(props){
    super(props)

    this.state = {
      count : 0
    }
  }

  increment() {
    // this.setState( 
    //   {
    //     count: this.state.count + 1
    //   }, 
    //   () => {console.log('Callback value', this.state.count)}
    // )

    this.setState((prevState) => ({ // Always use setState and never modify the state directly
      count: prevState.count + 1
    }))
    console.log(this.state.count) // this will not be updated because setState function is async.
  }

  incrementFive() { // React may group multiple setState calls into a single update for better performance
    this.increment() 
    this.increment()
    this.increment()
    this.increment()
    this.increment() // So, these 5 iteration will not effect the result, it will run just once.
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter;