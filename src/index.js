import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Typewriter extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Default text',
    speed: 100,
    loop: true,
    loopDelay: 1000,
    cursor: true,
    cursorType: '_',
    hideCursorAfterTyping: false
  }

  render() {
    const { text } = this.props

    return <div className={styles.test}>Typewriter: {text}</div>
  }
}
