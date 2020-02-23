import React, { Component } from 'react'
import DynoImg from 'dyno-img-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <DynoImg 
          src={"https://pbs.twimg.com/profile_images/711687178921717760/DLSZLtLQ_400x400.jpg"}
          srcHigh={"https://i.stack.imgur.com/1328R.jpg"}
          alt={"alternate"}
          rootMargin={"10%"}
        />
      </div>
    )
  }
}
