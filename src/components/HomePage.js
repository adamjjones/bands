import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Zac_Brown from './Zac_Brown'
import Shania_Twain from './Shania_Twain'
import Weird_Al from './Weird_Al'
import Images from './Zac-brown.jpeg'
import Imagesec from './Shania-Twain.png'
import Imagethird from './MandatoryFun.jpg'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE HOME PAGE</h1>
        <img src={Images} />
        <Link to="/Zac_Brown" className="link">
          Zac Brown
        </Link>
        <img src={Imagesec} />
        <Link to="/Shania_Twain" className="link">
          Shania Twain
        </Link>
        <img src={Imagethird} />
        <Link to="/Weird_Al" className="link">
          Weird Al
        </Link>
      </div>
    )
  }
}

export default HomePage
