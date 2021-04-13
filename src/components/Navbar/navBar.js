import React, {Component} from "react"

import './NavBar.css';

//Importar imagenes
import logo from '../../img/logo.svg'
import arrow from '../../img/arrow.svg'

import {Navbar, Nav} from 'react-bootstrap'

export default class NavbarH extends Component {
	render(){
		return(
			<div className="navbar-container mt-1 mb-1" >
				<Navbar expand="lg">
        <Nav.Link href="/" className=""><img src={logo} alt=""/></Nav.Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="d-flex">
							<Nav.Link href="login" className="nav_style pl-2">Iniciar sesión</Nav.Link>
							<Nav.Link href="singup" className="nav_style pl-2">Registro</Nav.Link>
              <Nav.Link href="pce" className="button_pce pl-2" >Proceso Cuidado Enfermero <img src={arrow} className="img_nav"/></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}


