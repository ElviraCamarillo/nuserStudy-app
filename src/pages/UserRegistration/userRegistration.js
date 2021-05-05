// Importar modulos
import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

// Importar componentes
import NavbarH from "../../components/Navbar/navBar"
import Footer from "../../components/footer/footer"
import Api from "../../lib/api"

// Import CSS
import "./UserRegistration.css"
import desktop from "../../img/desktop.svg"

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      ispassok: true,
      response: "",
      statusresponse: ""
    };
  }
  handleInput(event) {
    // console.log(event);
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const email = this.state.email;
    const password = this.state.password;
    const verifypassword = this.state.verifyPass;
    // console.log(username, first_name, last_name);
    if (
      username === "" ||
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === ""
    ) {
      // console.log("Campos vacios");
      this.setState({
        ispassok: false,
        response: "No deben existir campos vacios",
        statusresponse: "error",
      });
      setTimeout(() => {
        this.setState({
          ispassok: true,
          response: "",
          statusresponse: "",
        });
      }, 4000)
    } else if (verifypassword !== password) {
      // console.log("password no coinciden");
      this.setState({
        ispassok: false,
        response: "Las contraseñas no coinciden",
        statusresponse: "error",
      });
      setTimeout(() => {
        this.setState({
          ispassok: true,
          response: "",
          statusresponse: "",
        });
      }, 4000)
    } else {
      const payload = await Api.newUser({
        username,
        first_name,
        last_name,
        email,
        password,
      })
      // console.log(payload);
      if (payload.email) {
        this.setState({
          response: "Usuario registrado correctamente",
          statusresponse: "success",
        });
        setTimeout(() => {
          this.props.history.push(`/login`);
        }, 5000);
      } else {
        if (payload.username[0].includes("username already exists")) {
          this.setState({
            response: "El usuario seleccionado ya esta registrado",
            statusresponse: "error",
          });
          setTimeout(() => {
            this.setState({
              response: "",
              statusresponse: "",
            });
          }, 4000);
        }
        if (payload.username[0].includes("Enter a valid username")) {
          this.setState({
            response:
              "El usuario debe contener letras, numeros, @, ., +, -, _, sin espacios",
            statusresponse: "error",
          });
          setTimeout(() => {
            this.setState({
              response: "",
              statusresponse: "",
            });
          }, 4000);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <NavbarH />
        <div className="container d-flex justify-content-center mt-5 mb-5 card_create_user">
          <div className="row mb-4 align-items-center pt-4">
            <div className="col-md-6 text-center">
              <img src={desktop} alt="" className="mb-4" />
              <h2 class="">Registrate</h2>
              <p>Para ayudarte a mantener tú score</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <Form
                  className="mt-4"
                  onSubmit={this.onSubmit.bind(this)}
                  action=""
                >
                  <Form.Group controlId="username">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su usuario"
                      name="username"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="first_name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      name="first_name"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="last_name">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese sus apellidos"
                      name="last_name"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="mail@example.com"
                      name="email"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      name="password"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="verifyPass">
                    <Form.Label>Verifica tu Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      name="verifyPass"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <p
                    className={`response-message ${this.state.statusresponse}`}
                  >
                    {this.state.response}
                  </p>

                  <div className="d-flex flex-column justify-content-center align-items-start mt-4">
                    <Button className="submit_btn" type="submit">
                      Regístrate
                    </Button>
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                    <p className="noAccount">¿Ya tienes cuenta?</p>
                    <Link to="/login" className="">
                      Inicia sesión
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
