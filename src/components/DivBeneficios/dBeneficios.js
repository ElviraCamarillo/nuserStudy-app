import React, {Component} from "react"

//importar estilos
import './dBeneficio.css';

//Importar imagenes
import nurseBeneficios from '../../img/img-nurse-dbeneficios.svg'

export default class DivBeneficios extends Component {
	render(){
		return(
            <div className="divContainer container d-flex mt-5 ">
                <div className="div1-home col-6 py-5" >
                    <h1 className="Title ">Beneficios de usar<br/> NurseStudy</h1>
                    <p className="elParrafo mt-5 mb-5">Te brindamos las herramientas necesarias para que refuerces tu conocimiento acerca del Proceso de Cuidado Enfermero</p>
                </div> 
                <div className="col-6 d-flex justify-content-end">
                    <img src={nurseBeneficios}alt=""/>
                </div>
                
			</div>
            
		)
	}
}
