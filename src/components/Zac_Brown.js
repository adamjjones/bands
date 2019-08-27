import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Images from './Zac-brown.jpg'

class Zac_Brown extends Component {
  render() {
    return (
      <section>
        <div>
          <h1>This is the Zac Brown band page</h1>
          <img src={Images} />
          <h3>"The Owl" is the newest ablum by Zac Brown band</h3>
          <p>This album is not yet released</p>
        </div>
      </section>
    )
  }
}

export default Zac_Brown
