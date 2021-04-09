import React, {Component} from "react"

//Importar imagenes
import logo from '../../img/logo.svg'

import { Button } from 'react-bootstrap'

export default class Navbar extends Component {
	render(){
		return(
			<div className="navbar-container" >
					<h1>NavBar</h1>
					<img src={logo} alt=""/>
					<Button variant="primary">Primary</Button>
			</div>
		)
	}
}

