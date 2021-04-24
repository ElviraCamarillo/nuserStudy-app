import React, {Component} from "react"

import './NavBar.css';

//Importar imagenes
import logo from '../../img/logo.svg'
import arrow from '../../img/arrow.svg'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default class NavbarUser extends Component {
	render(){

		return(
			<div className="navbar-container mt-1 mb-1 container" >
				<Navbar expand="lg">
        	<Nav.Link href="/" className=""><img src={logo} alt=""/></Nav.Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="d-flex">
							<Nav.Link href="" className="nav_style pl-2">Hola Gabriela</Nav.Link>
							<NavDropdown title="Proceso Cuidado Enfermero" id="basic-nav-dropdown">
								<NavDropdown.Item href="/valoracionTema">Valoración</NavDropdown.Item>
								<NavDropdown.Item href="/diagnosticoTema">Diagnóstico</NavDropdown.Item>
								<NavDropdown.Item href="/evaluacionTema">Ejecución</NavDropdown.Item>
                <NavDropdown.Item href="/planeacionTema">Planeación</NavDropdown.Item>
                <NavDropdown.Item href="/evaluacionTema">Evaluación</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="/trivias" className="nav_style pl-2 button_pce">Trivias <img src={arrow} className="img_nav"/></Nav.Link>
              <Nav.Link href="" className="nav_style pl-2">Salir</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}


