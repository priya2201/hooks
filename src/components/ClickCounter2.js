import React, { Component } from 'react'

 class ClickCounter2 extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count :0
    //   }
    // }
    // incrementCount=()=>{
    //     this.setState(prevstate =>{
    //         return {count :prevstate.count + 1}
    //     })
    // }
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounter2
