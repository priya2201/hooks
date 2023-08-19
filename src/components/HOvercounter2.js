import React, { Component } from 'react'

 class Hovercounter2 extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count :0
    //     }
    //   }
    //   incrementCount=()=>{
    //       this.setState(prevstate =>{
    //           return {count :prevstate.count + 1}
    //       })
    //   }
  render() {
//     const {count}=this.state
//     return (
//       <div>
//         <h2 onMouseOver={this.incrementCount}> Hovered  {count} times</h2>
//       </div>
//     )
//   }
const {count,incrementCount}=this.props
return (
          <div>
            <h2 onMouseOver={incrementCount}> Hovered  {count} times</h2>
          </div>
        )
      }

}

export default Hovercounter2
