// Importar modulos
import React, { Component } from "react";
import { Card, CardDeck, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Importar componentes
import NavbarH from "../../components/Navbar/navBar";
import Footer from "../../components/footer/footer";
import NavbarUser from "../../components/Navbar/navBarUser";
// import CardMethodology from "../../components/CardMethodology/cardMethodology";

// Import CSS
import "./Trivias.css";

import PCEImg from "../../img/trivias/pce.svg";
import ValorationImg from "../../img/trivias/valoration.svg";
import DataImg from "../../img/trivias/data.svg";
import ExplorationImg from "../../img/trivias/exploration.svg";
import InterviewImg from "../../img/trivias/interview.svg";
import ObservationImg from "../../img/trivias/observation.svg";

import Api from "../../lib/api";

export default class TriviasPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataQuestion: [],
      arrMethodologyEmpty: [],
      arrMethodologyObject: []
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("tokenapp")

    const getMethod = async (token) => {
      const payload = await Api.getTriviaMethodology("Token " + token);
      // console.log(payload)
      let tempMethodologyEmpty = []
      let tempMethodologyObject = []
      payload.forEach((cv) => {
        // console.log(cv.methodology)
        if (!tempMethodologyEmpty.includes(cv.methodology)) {
          tempMethodologyEmpty.push(cv.methodology)
          tempMethodologyObject.push({
            name: cv.methodology,
            id: cv.id
          })
        }
      })
      this.setState({
        arrMethodologyEmpty: [...tempMethodologyEmpty]
      })
      this.setState({
        arrMethodologyObject: [...tempMethodologyObject]
      })
      
    }
    getMethod(token)
  }

  render() {
    const token = localStorage.getItem("tokenapp")
    // console.log(this.state)
    return (
      <div>
        { token !== null ? <NavbarUser/> : <NavbarH /> }
        <div className="container">
          <h1 className="my-5">Comprueba cuánto sabes.</h1>
          <div className="row">
            <CardDeck className="mb-5 wrap__card__trivias">
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("PATRONES") ?
              <Card className="d-flex flex-row card_trivia card_trivia_data">
                <Card.Img src={DataImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/1/levels">Tema: Patrones funcionales</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    El método de valoración por patrones funcionales de salud
                    fue desarrollado Marjory Gordon y proporcionan una
                    estructura lógica de valoración y una base de datos para el
                    diagnóstico enfermero.
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
              : ''
            } 
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("CEFALOCAUDAL") ?
              <Card className="d-flex flex-row card_trivia card_trivia_pce  col-12 col-md-6 ">
                <Card.Img src={PCEImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/2/levels">Tema: Cefalocaudal</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    Proviene del metodo de Observación que es un proceso logico
                    y deliberado para obtener informacion a través de los
                    órganos de los sentidos.
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
              : ''
            }
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("HABITOS") ?
              <Card className="d-flex flex-row card_trivia card_trivia_valoration col-12 col-md-6">
                <Card.Img src={ValorationImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/3/levels">Tema: Habitos externos</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    Proviene del metodo de Observación. Es el conjunto de datos
                    obtenidos de la inspección general es decir a simple vista
                    sin realizar ninguna otra maniobra de exploración física y
                    sin ningún interrogatorio.
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
              : ''
            }
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("ANAMNESIS") ?
              <Card className="d-flex flex-row card_trivia card_trivia_observation">
                <Card.Img src={ObservationImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/4/levels">Tema: Anamnesis de enfermeria</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    Proviene del metodo de entrevista, es una conversación
                    planificada para dar y obtener información e identificar
                    problemas para identificar personalmente al individuo.
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
              : ''
            }
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("PALPACION") ?
              <Card className="d-flex flex-row card_trivia card_trivia_interview">
                <Card.Img src={InterviewImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/5/levels">Tema: Palpación</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    Proviene del metodo Exploración física, se practica a toda
                    persona a fin de reconocer las alteraciones o signos
                    producidos por la enfermedad.
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
              : ''
            }
            { 
              this.state.arrMethodologyEmpty.length > 0 && this.state.arrMethodologyEmpty.includes("INSPECCION") ?
              <Card className="d-flex flex-row card_trivia card_trivia_exploration">
                <Card.Img src={ExplorationImg} className=" card_trivia_img" />
                <Card.Body>
                  <Card.Title className="card_trivia_title">
                    <Link to="/trivias/6/levels">Tema: Inspección</Link>
                  </Card.Title>
                  <Card.Text className="card_trivia_text">
                    Proviene del metodo Exploración física y tiene como
                    objetivo: confirmar los datos obtenidos, detectar nuevos
                    signos o síntomas.
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
              : ''
            }
            
            </CardDeck>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
