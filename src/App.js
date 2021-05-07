import React, { Component } from  'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import Logout from './pages/LogOut/index'
import TriviasPage from './pages/Trivias/trivias'
import CreateUser from './pages/UserRegistration/userRegistration'
import StagesPCE from './pages/StagesPCE/stagesPce'
import ValorationDescription from './pages/ValorationDescription/valorationDescription'
import Error from './pages/Error404/error404'
import DiagnosisDescription from './pages/DiagnosisDescription/diagnosisDescription'
import PlanningDescription from './pages/PanningDescription/planningDescription'
import EjecutionDescription from './pages/ExecutionDescription/executionDescription'
import EvaluationDescription from './pages/EvaluationDescription/evaluationDescription'
import TriviasValorationPage from './pages/TriviaValoration/triviaValoration'
import TriviasQuestionPage from './pages/TriviaQuestion/triviaQuestion'
import TriviasResultPage from './pages/TriviaQuestion/triviaResult'


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
            <Route
              exact path="/login"
              component={Login}
            />
            <Route
              exact path="/logout"
              component={Logout}
            />
            <Route
              exact path="/signup"
              component={CreateUser}
            />
            <Route
              exact path="/pce"
              component={StagesPCE}
            />
            <Route
              exact path="/pce/valoracion"
              component={ValorationDescription}
            />
            <Route
              exact path="/pce/diagnostico"
              component={DiagnosisDescription}
            />
            <Route
              exact path="/pce/planeacion"
              component={PlanningDescription}
            />
            <Route
              exact path="/pce/ejecucion"
              component={EjecutionDescription}
            />
            <Route
              exact path="/pce/evaluacion"
              component={EvaluationDescription}
            />
            <Route
              exact path="/trivias"
              component={TriviasPage}
            />
            <Route
              exact path="/trivias/:idMethodology/levels"
              component={TriviasValorationPage}
            />
            <Route
              exact path="/question/:idMethodology/:level"
              component={TriviasQuestionPage}
            />
            <Route
              exact path="/question/result"
              component={TriviasResultPage}
            />
            <Route
              exact path="*"
              component={Error}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

