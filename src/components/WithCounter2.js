import React from 'react'

const WithCounter2=(WrappedComponent,incrementNumber)=>{
    class WithCounterNew extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementState=()=>{
              this.setState(previousStats=>{
      return {count : previousStats.count + incrementNumber}
              })
          }

          render(){
            console.log(this.props.name)
            return <WrappedComponent
            count={this.state.count}
            incrementState={this.incrementState}
            {...this.props}/>
          }
    }
    return WithCounterNew
}
export default WithCounter2

