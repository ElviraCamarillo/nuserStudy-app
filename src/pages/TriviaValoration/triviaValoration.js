// Importar modulos
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import NavbarUser from '../../components/Navbar/navBarUser'
import Footer from '../../components/footer/footer'

// Import CSS
import './TriviaValoration.css'

import PlayImg from '../../img/triviasLevel/play.svg'


export default class TriviasValorationPage extends Component {
  render(){
    const token =  localStorage.getItem('tokenapp')
    console.log(token)
    return(
      <div>
        {token !== null
          ?   
          <NavbarUser/>
          :
          <NavbarH/>
        }
        <div className="container">
          <h1 className="mt-5">Trivia</h1>
          <p>Etapa de valoracion</p>
          <div className="row mt-5 mb-5 d-flex justify-content-between">
              <div className="cardLevel p-4">
                <h2>Nivel 1</h2>
                <p>10 preguntas</p>
                <button className='buttonCardLevel d-flex align-items-center justify-content-center' >
                  <p className="mr-2">Continuar</p>
                  <Link to="/question">
                    <img src={PlayImg} alt=""/>

                  </Link>
                </button>
              </div>
              <div className="cardLevel p-4">
                <h2>Nivel 2</h2>
                <p>10 preguntas</p>
                <button className='buttonCardLevel d-flex align-items-center justify-content-center' >
                  <p className="mr-2">Continuar</p>
                  <img src={PlayImg} alt=""/>
                </button>
              </div>
              <div className="cardLevel p-4">
                <h2>Nivel 3</h2>
                <p>10 preguntas</p>
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
