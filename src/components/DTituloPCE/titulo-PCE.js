import React, {Component} from "react"

//importar estilos
import './titulo-PCE.css';


export default class TituloPCE extends Component {
	render(){
		return(
            <div className="dTituloPCE container mt-5 ">
                <h2 className="elTituloPCE">Etapas del Proceso<br /> Cuidado Enfermero</h2>
                <p className="pPCE mt-5 ">Proceso de enfermería considerado como el método del cuidado, <br />el cual mediante una serie de fases describen la práctica de la enfermería.</p>
            </div>
            
		)
	}
}