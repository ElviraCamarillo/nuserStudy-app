// Importar modulos
import React, { Component } from 'react'
import {Card, CardDeck, ProgressBar} from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './TriviaValoration.css'

import PlayImg from '../../img/triviasLevel/play.svg'


export default class TriviasValorationPage extends Component {
  render(){
    return(
      <div>
        <NavbarH/>
        <div className="container">
          <h1 className="mt-5">Trivia</h1>
          <p>Etapa de valoracion</p>
          <div className="row mt-5 mb-5 d-flex justify-content-center">
              <div className="cardLevel p-4">
                <h2>Nivel 1</h2>
                <p>15 preguntas</p>
                <button className='buttonCardLevel d-flex align-items-center justify-content-center' >
                  <p className="mr-2">Continuar</p>
                  <img src={PlayImg} alt=""/>
                </button>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
