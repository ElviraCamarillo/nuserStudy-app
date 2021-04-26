// Importar modulos
import React, { Component } from 'react'
import {Card, CardDeck, ProgressBar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import NavbarUser from '../../components/Navbar/navBarUser'

// Import CSS
import './Trivias.css'

import PCEImg from '../../img/trivias/pce.svg'
import ValorationImg from '../../img/trivias/valoration.svg'
import DataImg from '../../img/trivias/data.svg'
import ExplorationImg from '../../img/trivias/exploration.svg'
import InterviewImg from '../../img/trivias/interview.svg'
import ObservationImg from '../../img/trivias/observation.svg'

export default class TriviasPage extends Component {
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
          <h1 className="my-5">Comprueba cuánto sabes.</h1>
          <div className="row">

            <CardDeck className="mb-5">
            <Card className="d-flex flex-row card_trivia card_trivia_pce  col-12 col-md-6 ">
              <Card.Img src={PCEImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Tema: Cefalocaudal</Card.Title>
                <Card.Text className="card_trivia_text">
                  Proviene del metodo de Observación que es un proceso logico y deliberado para obtener informacion
                  a través de los órganos de los sentidos.
                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
                  <div>
                    Nivel <strong>1</strong> de <strong>3</strong>
                  </div>
                  <div className="wrap_progress pce">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>             
              </Card.Body>
            </Card>
            <Card className="d-flex flex-row card_trivia card_trivia_valoration col-12 col-md-6">
              <Card.Img src={ValorationImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Tema: Habitos externos</Card.Title>
                <Card.Text className="card_trivia_text">
                Proviene del metodo de Observación.
                Es el conjunto de datos obtenidos de la inspección general es decir a simple vista 
                sin realizar ninguna otra maniobra de exploración física y sin ningún interrogatorio. 

                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
                  <div>
                    Nivel <strong>1</strong> de <strong>3</strong>
                  </div>
                  <div className="wrap_progress valoration">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>             
              </Card.Body>
            </Card>
            </CardDeck>
            
            
            <CardDeck className="mb-5">
            <Card className="d-flex flex-row card_trivia card_trivia_data">
              <Card.Img src={DataImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">
                  <Link to="/tvaloration">Tema: Patrones funcionales</Link>
                  
                  </Card.Title>
                <Card.Text className="card_trivia_text">
                  El método de valoración por patrones funcionales de salud fue desarrollado Marjory Gordon y
                  proporcionan una estructura lógica de valoración y una base de datos para el diagnóstico enfermero.
                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">

                    <div>
                      Nivel <strong>1</strong> de <strong>3</strong>
                    </div>
                  
                  <div className="wrap_progress data">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>            
              </Card.Body>
            </Card>
            <Card className="d-flex flex-row card_trivia card_trivia_observation">
              <Card.Img src={ObservationImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Tema: Anamnesis de enfermeria</Card.Title>
                <Card.Text className="card_trivia_text">
                  Proviene del metodo de entrevista, es una conversación planificada para 
                  dar y obtener información e identificar problemas para identificar personalmente al individuo.
                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
                  <div>
                    Nivel <strong>1</strong> de <strong>3</strong>
                  </div>
                  <div className="wrap_progress observation">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>             
              </Card.Body>
            </Card>
            </CardDeck>
            <CardDeck className="mb-5">
            <Card className="d-flex flex-row card_trivia card_trivia_interview">
              <Card.Img src={InterviewImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Tema: Palpación</Card.Title>
                <Card.Text className="card_trivia_text">
                  Proviene del metodo Exploración física, se practica a toda persona a fin de 
                  reconocer las alteraciones o signos producidos por la enfermedad.
                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
                  <div>
                    Nivel <strong>1</strong> de <strong>3</strong>
                  </div>
                  <div className="wrap_progress interview">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>            
              </Card.Body>
            </Card>
            <Card className="d-flex flex-row card_trivia card_trivia_exploration">
              <Card.Img src={ExplorationImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Tema: Inspección</Card.Title>
                <Card.Text className="card_trivia_text">
                Proviene del metodo Exploración física y tiene como objetivo: confirmar los datos obtenidos, detectar nuevos signos o síntomas.
                </Card.Text>
                <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
                  <div>
                    Nivel <strong>1</strong> de <strong>3</strong>
                  </div>
                  <div className="wrap_progress exploration">
                    <ProgressBar now={30} className="progressBarCard" />
                  </div>
                </Card.Text>             
              </Card.Body>
            </Card>
            </CardDeck>
            
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}