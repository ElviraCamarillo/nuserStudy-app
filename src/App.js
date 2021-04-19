import React, { Component } from  'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import StagesPCE from './pages/StagesPCE/stagesPce'
import ValorationDescription from './pages/ValorationDescription/valorationDescription'

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
        <Switch>
          <Route
            exact path="/login"
            component={Login}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/etapasValoracion"
            component={StagesPCE}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/valoracionTema"
            component={ValorationDescription}
          />
        </Switch>
      </div>
    </BrowserRouter>


    )
  }
}