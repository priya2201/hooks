import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class HoverCounter extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            count :0
//         }
//       }
//   incrementCount=()=>{
//       this.setState(prevState =>{
//           return {count: prevState.count + 1}
//       })
//   }
  render() {
//     const {count}=this.state
//     return (
//       <div>
//         <h2 onMouseOver={this.incrementCount}>
//             {this.props.name} hover {count} times</h2>
//       </div>
//     )
//   }
const {count,incrementCount}=this.props
return(
    <h2 onMouseOver={incrementCount}>
        Hovered{count} times
    </h2>
)
}
}


export default UpdatedComponent(HoverCounter)
