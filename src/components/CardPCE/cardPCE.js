import React, {Component} from "react"
import { Card } from "react-bootstrap";

//importar estilos
import './CardPCE.css';

//Importar imagenes
import elLogoCard from '../../img/logo-card-pce-1.svg'
import laFlechaCard from '../../img/flecha-vector-card.svg'
export default class CardPCEOne extends Component {
  constructor(props){
    super(props)
    this.state = {imageCard: {elLogoCard}, titleCard: 'Hola', contentCard: 'Soy el contenido', hrefPage:'/login' }
  }
	render(){

		return(
      <div className="divPCE container mt-5">
        <div className="divCard row">
          <div className="col-6">
            <img src={this.props.imageCard}alt=""className="elLogoCard"/>
          </div>
          <div className="col-6">
            <h2 className="elTitulo mt-4 mb-4">{this.props.titleCard}</h2>
            <p className="elContenido">
              {this.props.contentCard}
            </p>
            <a href= {this.props.hrefPage} className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="ml-3"/> </a>
          </div>
            
        </div>
            
      </div>
            
		)
	}
}
