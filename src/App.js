import React, { Component } from  'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/home'
//import HomePCE from './pages/HomePCE/homepce'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class App extends Component{
  render(){
    return(
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
        </Switch>
      </div>
    </BrowserRouter>


    )
  }
}