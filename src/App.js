import React, { Component } from  'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import TriviasPage from './pages/Trivias/trivias'
import CreateUser from './pages/UserRegistration/userRegistration'
import StagesPCE from './pages/StagesPCE/stagesPce'
import ValorationDescription from './pages/ValorationDescription/valorationDescription'
import Error from './pages/Error404/error404'
import DiagnosisDescription from './pages/DiagnosisDescription/diagnosisDescription'
import PlanningDescription from './pages/PanningDescription/planningDescription'
import EjecutionDescription from './pages/ExecutionDescription/executionDescription'
import EvaluationDescription from './pages/EvaluationDescription/evaluationDescription'


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
            exact path="/singnin"
            component={CreateUser}
            />
        </Switch>
        <Switch>
          <Route
            exact path="/pce"
            component={StagesPCE}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/valoracionTema"
            component={ValorationDescription}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/diagnosticoTema"
            component={DiagnosisDescription}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/planeacionTema"
            component={PlanningDescription}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/ejecucionTema"
            component={EjecutionDescription}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/evaluacionTema"
            component={EvaluationDescription}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/trivias"
            component={TriviasPage}
          />
        </Switch>
        <Switch>
          <Route
            exact path="/error"
            component={Error}
          />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}