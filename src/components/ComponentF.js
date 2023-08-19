import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
      {/* <div>
        Component F
      </div> */}
      {username =>{
        return <div>hello {username}</div>
      }}
      </UserConsumer>
    )
  }
}

export default ComponentF
