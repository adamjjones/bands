import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Zac_Brown from './components/Zac_Brown'
import Shania_Twain from './components/Shania_Twain'
import Weird_Al from './components/Weird_Al'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Zac_Brown"> Zac Brown </Link>
            </li>
            <li>
              <Link to="/Shania_Twain"> Shania Twain </Link>
            </li>
            <li>
              <Link to="/Weird_Al"> Weird Al </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Zac_Brown" exact component={Zac_Brown} />
          <Route path="/Shania_Twain" exact component={Shania_Twain} />
          <Route pathj="/Weird_Al" exact component={Weird_Al} />
        </Switch>
      </Router>
    )
  }
}

export default App
