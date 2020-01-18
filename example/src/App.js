import React, { Component } from 'react'

import Typewriter from 'react-typewriter'

export default class App extends Component {
  render() {
    const style = {
      color: 'blue'
    }
    return (
      <div>
        <Typewriter style={style} text="Example typewriter style text" />
      </div>
    )
  }
}
