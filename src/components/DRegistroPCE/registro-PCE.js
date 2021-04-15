import React, {Component} from "react"

//importar estilos
import './registro-PCE.css';

import arrowBtn from '../../img/flecha-vector-btn.svg'

//importar 
import { Button } from 'react-bootstrap'

export default class DregistroPCE extends Component {
	render(){
		return(
            <div className="dRegistroPCE container mt-5 ">
                <h2 className="elTituloRegistro pt-5">Click aquí para crear registro</h2>
                <Button variant="primary" className="btnRegistro1 mt-5 mb-5">Proceso Cuidado Enfermero
                <img src={arrowBtn}alt="" className="vectorBtn"/>
                </Button>
            </div>
            
		)
	}
}