// Importar modulos
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import Api from '../../lib/api'


// Import CSS
import './UserRegistration.css'

import imageCreateUser from '../../img/img-nurse-dbeneficios.svg'
import desktop from '../../img/desktop.svg'

export default class CreateUser extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      last_name: '',
      fisrt_name:'',
      email: '',
      password: '',
      ispassok: true,
      response:'',
      statusresponse: ''
    }
  }
  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }
  async onSubmit (event) {
    event.preventDefault()
    const fist_name = this.state.first_name
    const username = this.state.username
    const last_Name = this.state.last_name
    const email = this.state.email
    const password = this.state.password
    const verifypassword = this.state.verifyPass
    console.log(this.props)
    if(verifypassword !== password) {
      // si pass no coinciden
      console.log('password no coinciden')
      this.setState({
        ispassok: false,
        response: 'Las contraseñas no coinciden',
        statusresponse: 'error'
      });
      setTimeout(() => {
        this.setState({
          ispassok: true,
          response: '',
          statusresponse: ''
        });
      }, 4000)

    }else{
      // si todo ok
      const payload = await Api.newUser({fist_name, last_Name, email, password, username})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Usuario registrado correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          this.props.history.push(`/login`)
        }, 5000)
      }else{
        this.setState({
          response: payload.error,
          statusresponse: 'error'
        });
        setTimeout(() => {
          this.setState({
            response: '',
            statusresponse: ''
          });
        }, 4000)
      }
    }
  }
  

  render (){
    return(
      <div>
        <NavbarH/>
        <div className="container d-flex justify-content-center mt-3 mb-5 card_create_user">
          <div className="row mb-4 align-items-center pt-4">
            <div className="col-md-6">
              <img src={desktop} alt="" className="mb-4"/>
              <h2 class="">Registrate</h2>
              <p>Para ayudarte a mantener tú score</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                {/* <div className="text_create_user mt-5 ">
                  <img src={desktop} alt="" class="" />
                  <h2 class="">Registrate</h2>
                  <p>Para ayudarte a mantener tú score</p>
                </div> */}
                <Form
                  className='signin-form mt-4' 
                  onSubmit={this.onSubmit.bind(this)} 
                  action=''>
                  <Form.Group controlId="username">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nickname" 
                      name="username"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <Form.Group controlId="fist_name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" 
                      name="first_name"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <Form.Group controlId="last_name">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese sus apellidos" 
                      name="last_name"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="mail@example.com" 
                      name="email"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="" 
                      name="password"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <Form.Group controlId="verifyPass-signin">
                    <Form.Label>Verifica tu Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="" 
                      name="verifyPass"
                      onChange={this.handleInput.bind(this)}
                      autoComplete="off" 
                    />
                  </Form.Group>
                  <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                  
                  <div className='d-flex flex-column justify-content-center align-items-start mt-4'>
                    <Button className="submit_btn" type="submit">
                      Regístrate
                    </Button>
                  </div> 
                </Form>
                

              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}