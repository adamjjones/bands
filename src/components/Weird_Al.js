import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Images from './MandatoryFun.jpg'

class Weird_Al extends Component {
  render() {
    return (
      <div>
        <h1>This is the Weird Al page</h1>
        <img src={Images} />
        <h3>Mandatory fun is the 14th album by Weird Al</h3>
        <p>This is the latest album and was released in 2014 </p>
      </div>
    )
  }
}

export default Weird_Al
