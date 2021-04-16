import React, {Component} from "react"

//importar estilos
import './div1.css';

//Importar imagenes
import nurseHome from '../../img/img-nurse-home.svg'
import flechaHorizontal from '../../img/img-btn-s1.svg'

//importar elementos de bootstra
import { Button } from 'react-bootstrap'

/*<Button variant="primary">Primary</Button>
*/
export default class Div1 extends Component {
	render(){
		return(
            <div className="container d-flex mt-5 ">
                <div className="div1-home col-6 py-5" >
                    <h1 className="Title ">Aprendamos juntos sobre el Proceso Cuidado Enfermero</h1>
                    <p className="elParrafo mt-5 mb-5">Te brindamos las herramientas necesarias para que refuerces tu conocimiento acerca del Proceso de Cuidado Enfermero</p>
                    <Button variant="primary" className="btnHome1">Conoce más<img src={flechaHorizontal}alt="" className="vectorBtn"/></Button>
			    </div> 
                <div className="col-6 d-flex justify-content-end">
                    <img src={nurseHome}alt=""/>
                </div>
			</div>
            
		)
	}
}
