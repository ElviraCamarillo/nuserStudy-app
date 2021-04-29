import React, {Component} from "react"
import {Card, ProgressBar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


//importar estilos
import './CardMethodology.css';

import DataImg from '../../img/trivias/data.svg'



export default class CardMethodology extends Component {
  constructor(props){
    super(props)
    this.state = {
        imageCard: {DataImg}, 
        methodology: 'Patrones funcionales', 
        descriptionCard:'El método de valoración por patrones funcionales de salud fue desarrollado Marjory Gordon y proporcionan una estructura lógica de valoración y una base de datos para el diagnóstico enfermero.',
        nivelCard: 1,
        progresCard: 30,
        styleCard: 'card_trivia_data'
    }
  }
  render(){
    return(
      <div>
        <Card className="d-flex flex-row card_trivia {this.props.styleCard}">
          <Card.Img src={this.props.imageCard} className=" card_trivia_img"/>
          <Card.Body>
            <Card.Title className="card_trivia_title">
              <Link to="/tvaloration">Tema: {this.props.methodology}</Link>
            </Card.Title>
            <Card.Text className="card_trivia_text">
              {this.props.descriptionCard}
            </Card.Text>
            <Card.Text className="card_trivia_text d-flex justify-content-between align-items-center">
              <div>
                Nivel <strong>{this.props.nivelCard}</strong> de <strong>3</strong>
              </div>
              <div className="wrap_progress data">
                <ProgressBar now={this.props.progresCard} className="progressBarCard" />
              </div>
            </Card.Text>            
          </Card.Body>
        </Card>
      </div>
    )
  }
		
}