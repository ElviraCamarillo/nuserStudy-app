import React, { Component } from "react"
import "./NavBar.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

//import imagenes
import logo from "../../img/logo.svg"

export default class NavbarUser extends Component {
  render() {
    const username = localStorage.getItem("username")

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
              <Nav.Link href="" className="nav_style pl-2">
                Hola <strong>{username}</strong>{" "}
              </Nav.Link>
              <Nav.Link href="/trivias" className="nav_style pl-2 ">
                Trivias
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

              <Link to="/logout">Salir</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
