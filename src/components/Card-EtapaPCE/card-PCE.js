import React, {Component} from "react"

//importar estilos
import './card-PCE.css';

//Importar imagenes
import elLogoCard from '../../img/logo-card-pce-1.svg'
import laFlechaCard from '../../img/flecha-vector-card.svg'

export default class CardPCE extends Component {
	render(props){

		return(
      <div className="divPCE container mt-5">
        <div className="divCard row ">
          <div className="col-6">
            <img src={elLogoCard}alt=""className="elLogoCard"/>
          </div>
          <div className="col-6">
            <h2 className="elTitulo mt-4 mb-4">Valoración</h2>
            <p className="elContenido">Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
            </p>
            <a href= ""className="linkPCE" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
          </div>
            
        </div>
            
      </div>
            
		)
	}
}
