# dyno-img-react

> a versatile react img component

[![NPM](https://img.shields.io/npm/v/dyno-img-react.svg)](https://www.npmjs.com/package/dyno-img-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dyno-img-react
```

## Usage

```jsx
import React, { Component } from 'react'

import DynoImg from 'dyno-img-react'

class Example extends Component {
  render () {
    return (
      <DynoImg 
        src={"low-quality-img-url"}
        srcHigh={"high-quality-img-url"}
        alt={"alternate"}
        // rootMargin defines the Margin around the root. The hq image will get loaded at the margin
        rootMargin={"10%"}
      />
    )
  }
}
```

## License

MIT © [albseb511](https://github.com/albseb511)
