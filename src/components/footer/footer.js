import React, {Component} from "react"

//Importar imagenes
import logo from '../../img/logo.svg'
import logofb from '../../assets/logofb.svg'
import logoInsta from '../../assets/logoInsta.svg'
import logotw from '../../assets/logotw.svg'
import logoComent from '../../assets/logoComent.svg'

/*import { Button } from 'react-bootstrap'
<Button variant="primary">Primary</Button>
*/
export default class Footer extends Component {
	render(){
		return(
			<div className="footer" >
                <div className="divLogo">
                  <h1><img src={logo}/>NurseStudy</h1>  
                </div>
				<div className="divListas">
                  <ul className="listImgRedes">
                        <li>
                            <img src={logofb} alt=""/>
                        </li>
                        <li>
                            <img src={logoInsta}alt=""/>
                        </li>
                        <li>
                            <img src={logotw}alt=""/>
                        </li>
                    </ul>
                    <ul className="listOpciones">
                        <li>Avíso de Privacidad</li>
                        <li>Terminos y condiciones</li>
                        <li>Preguntas frecuentes</li>
                        <li>Otra sección</li>
                    </ul>
                </div>
                <div className="divNurseApp">
                    <p>©NurseApp, 2021. Todos los derechos reservados</p>
                    <p><img src={logoComent}/></p>
                </div>	
                    
					
					
			</div>
		)
	}
}
