import React, {Component} from "react"

//importar estilos
import './div1.css';

//Importar imagenes
import nurseHome from '../../img/img-nurse-home.svg'

//importar elementos de bootstra
import { Button } from 'react-bootstrap'

/*<Button variant="primary">Primary</Button>
*/
export default class Div1 extends Component {
	render(){
		return(
            <div className="divContainer row row-cols-2">
                <div className="div1-home col-5 " >
                    <h1 className="Title">Aprendamos juntos sobre el Proceso Cuidado Enfermero</h1>
                    <p className="elParrafo">Te brindamos las herramientas necesarias para que refuerces tu conocimiento acerca del Proceso de Cuidado Enfermero</p>
                    <p className="elBoton"><Button className="btnHome1 elBoton1">Conoce más</Button></p>
			    </div> 
                <div className="colorBorder col-5 offset-1">
                    <img src={nurseHome}alt=""/>
                </div>
                
			</div>
            
		)
	}
}
