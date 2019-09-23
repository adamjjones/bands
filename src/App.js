import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Zac_Brown from './components/Zac_Brown'
import Shania_Twain from './components/Shania_Twain'
import Weird_Al from './components/Weird_Al'
import HomePage from './components/HomePage'
import Images from './components/Zac-brown.jpeg'
import Imagessec from './components/Shania-Twain.png'
import Imagethird from './components/MandatoryFun.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="nav">
            <Link to="/HomePage"> Home </Link>
            <Link to="/Zac_Brown"> Zac Brown </Link>
            <Link to="/Shania_Twain"> Shania Twain </Link>
            <Link to="/Weird_Al"> Weird Al </Link>
          </nav>
          <Switch>
            <Route path="/HomePage" exact component={HomePage} />
            <Route path="/Zac_Brown" exact component={Zac_Brown} />
            <Route path="/Shania_Twain" exact component={Shania_Twain} />
            <Route path="/Weird_Al" exact component={Weird_Al} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
