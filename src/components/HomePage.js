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
      <>
        <h1>THIS IS THE HOME PAGE</h1>
        <div className="bands">
          <Link to="/Zac_Brown" className="link">
            <img src={Images} />
            <p>Zac Brown Band</p>
          </Link>
          <Link to="/Shania_Twain" className="link">
            <img src={Imagesec} />
            <p>Shania Twain</p>
          </Link>
          <Link to="/Weird_Al" className="link">
            <img src={Imagethird} />
            <p>Weird_Al</p>
          </Link>
        </div>
      </>
    )
  }
}

export default HomePage
