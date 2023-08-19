import React, { Component } from 'react'
import WithCounter2 from './WithCounter2'
export class MouseDown extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     incrementState=()=>{
//         this.setState(previousStats=>{
// return {count : previousStats.count + 2}
//         })
//     }
    
  render() {
    // const {count}=this.state
const{count,incrementState}=this.props
    return (

      <div>

        {/* <button onMouseDown={this.incrementState}>Mouse down hover {count} times</button> */}
                <button onMouseDown={incrementState}>{this.props.name} Mouse down hover {count} times</button> 
<p> hovered {count} times </p>
      </div>
    )
  }
}

export default WithCounter2(MouseDown,10)
