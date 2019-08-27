import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Images from './Shania-Twain.png'

class Shania_Twain extends Component {
  render() {
    return (
      <div>
        <h1>This is the Shania Twain page</h1>
        <img src={Images} />
        <h3>"Now" is the latest album by Shania Twain</h3>
        <p>This album was released in 2017, but started recording in 2014</p>
      </div>
    )
  }
}

export default Shania_Twain
