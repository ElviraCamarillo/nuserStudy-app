import React, { Component } from "react";

import "./NavBar.css";

//Importar imagenes
import logo from "../../img/logo.svg";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavbarH extends Component {
  render() {
    return (
      <div className="navbar-container mt-1 mb-1 container">
        <Navbar expand="lg">
          <Nav.Link href="/" className="">
            <img src={logo} alt="" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="d-flex">
              <Nav.Link href="/login" className="nav_style pl-2">
                Iniciar sesión
              </Nav.Link>
              <Nav.Link href="/signup" className="nav_style pl-2">
                Registro
              </Nav.Link>
              <NavDropdown
                className="button_pce"
                title="Proceso Cuidado Enfermero"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/pce/valoracion">
                  Valoración
                </NavDropdown.Item>
                <NavDropdown.Item href="/pce/diagnostico">
                  Diagnóstico
                </NavDropdown.Item>
                <NavDropdown.Item href="/pce/ejecucion">
                  Ejecución
                </NavDropdown.Item>
                <NavDropdown.Item href="/pce/planeacion">
                  Planeación
                </NavDropdown.Item>
                <NavDropdown.Item href="/pce/evaluacion">
                  Evaluación
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
