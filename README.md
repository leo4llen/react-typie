# react-typie

> A react component to emulate typewriter text effect

[![NPM](https://img.shields.io/npm/v/react-typie.svg)](https://www.npmjs.com/package/react-typie) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-typie
```

## Usage

```jsx
import React, { Component } from 'react'

import Typie from 'react-typie'

class Example extends Component {
  render() {
    return <Typie text={'And example text'} speed={200} />
  }
}
```

### Available options

```jsx
// List of options that can be passed as props to the component

let options = {
    text: 'Default text',
    speed: 100,    // Speed in milliseconds
    loop: false,   // Set this to true if you want the effect to repeat
    loopDelay: 10, // Delay between repetitions in milliseconds
    cursor: true,  // Cursor
    cursorType: '_'// Custom cursor value
    onFinish : () => {} //  a callback which gets called after animation end. NOTE: Doesn't work if loop is enabled
    onProgress : progress => {} // a callback which is called during every tick of the animation. it's called with a progress param with values between 0 to 1
}

  <Typie {...options} />
```

## Roadmap

- [x] [Add basic customizable options]
- [x] [Add progress and completion callbacks]
- [ ] [Add Multitext support with linebreaks]

## License

MIT © [leo4llen](https://github.com/leo4llen)
