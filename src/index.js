import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './styles.css'

export default class Typewriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textPosition: 0
    }
  }

  _appendText = () => {
    const { text, speed } = this.props
    this.intervalTick = setInterval(() => {
      if (text.length === this.state.textPosition) this._resetTick()
      this.setState({ textPosition: ++this.state.textPosition })
    }, speed)
  }

  _resetTick = () => {
    const { loop, loopDelay, doneCb } = this.props
    return loop
      ? setTimeout(() => this.setState({ textPosition: 0 }), loopDelay)
      : doneCb && doneCb()
  }

  componentDidMount() {
    this._appendText()
  }

  componentWillUnmount() {
    this._resetTick()
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
    loop: PropTypes.bool,
    loopDelay: PropTypes.number,
    cursor: PropTypes.bool,
    cursorType: PropTypes.string,
    doneCb: PropTypes.func
  }

  static defaultProps = {
    text: 'Default text',
    speed: 100,
    loop: false,
    loopDelay: 10,
    cursor: true,
    cursorType: '_'
  }

  render() {
    const { textPosition } = this.state
    const { cursor, cursorType } = this.props

    return (
      <span {...this.props}>
        <span>{this.props.text.substring(0, textPosition + 1)}</span>
        <span className={style.blinker}>{cursor ? cursorType : ''}</span>
      </span>
    )
  }
}
