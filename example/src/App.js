import React, { Component } from 'react'

import Typie from 'react-typie'

export default class App extends Component {
  render() {
    const style = {
      color: 'blue'
    }
    return (
      <h1>
        <Typie style={style} text="Example typewriter style text" loop={true} />
      </h1>
    )
  }
}
