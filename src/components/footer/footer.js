import React, {Component} from "react"

//Importar imagenes
import logo from '../../img/logo.svg'
import logofb from '../../img/logofb.svg'
import logoInsta from '../../img/logoInsta.svg'
import logotw from '../../img/logotw.svg'


import './footer.css'

/*import { Button } from 'react-bootstrap'
<Button variant="primary">Primary</Button>
*/
export default class Footer extends Component {
	render(){
		return(
			<div className="footer mt-2" >
                <div className="divLogo">
                    <h1 className="mt-5 title_footer">
                      <img className="mr-2" src={logo} alt="NurseStudy logo" />NurseStudy
                    </h1>  
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
                        <li>Aviso de Privacidad</li>
                    </ul>
                </div>
                <div className="divNurseApp">
                    <p className="pNurse"> ©NurseApp, 2021. Todos los derechos reservados</p>
                </div>	
			</div>
		)
	}
}
