import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './styles.css'

export default class Typie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textPosition: 0
    }
  }

  _appendText = () => {
    const { text, speed, onProgress } = this.props
    this.intervalTick = setInterval(() => {
      // Reset tick after redering complete text
      if (text.length === this.state.textPosition) this._resetTick()
      // Update state and call optional optional onProgress handler
      onProgress && onProgress(this.state.textPosition / text.length)
      this.setState({ textPosition: ++this.state.textPosition })
    }, speed)
  }

  _resetTick = () => {
    const { loop, loopdelay, onFinish } = this.props

    clearInterval(this.intervalTick)
    return loop
      ? // Reinitate if looping is enabled
        setTimeout(() => {
          this.setState({ textPosition: 0 })
          this._appendText()
        }, loopdelay)
      : // Call optional finish callback if looping is disabled
        onFinish && onFinish()
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
    loopdelay: PropTypes.number,
    cursor: PropTypes.bool,
    cursorType: PropTypes.string,
    onFinish: PropTypes.func,
    onProgress: PropTypes.func
  }

  static defaultProps = {
    text: 'Default text',
    speed: 100,
    loop: false,
    loopdelay: 10,
    cursor: true,
    cursorType: '_'
  }

  render() {
    const { textPosition } = this.state
    const { cursor, cursorType, ...rest } = this.props

    return (
      <span {...rest}>
        <span>{this.props.text.substring(0, textPosition + 1)}</span>
        <span className={style.blinker}>{cursor ? cursorType : ''}</span>
      </span>
    )
  }
}
