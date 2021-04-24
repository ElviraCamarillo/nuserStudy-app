// Importar modulos
import React, { Component } from 'react'
import {Card, CardDeck, ProgressBar} from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

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
    return(
      <div>
        <NavbarH/>
        <div className="container">
          <h1 className="my-5">Comprueba cuánto sabes.</h1>
          <div className="row">

            <CardDeck className="mb-5">
            <Card className="d-flex flex-row card_trivia card_trivia_pce  col-12 col-md-6 ">
              <Card.Img src={PCEImg} className=" card_trivia_img"/>
              <Card.Body>
                <Card.Title className="card_trivia_title">Etapas del Proceso Cuidado Enfermero</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                <Card.Title className="card_trivia_title">Fases de etapa de Valoración</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                <Card.Title className="card_trivia_title">Métodos de obtención de datos</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                <Card.Title className="card_trivia_title">Observación del paciente</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                <Card.Title className="card_trivia_title">Entrevista al paciente</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                <Card.Title className="card_trivia_title">Exploración física del paciente</Card.Title>
                <Card.Text className="card_trivia_text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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