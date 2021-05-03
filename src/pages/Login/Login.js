import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import Api from '../../lib/api'


import './Login.css'

import desktop from '../../img/desktop.svg'

export default class Login extends Component {
  constructor(props){
    super (props)
    this.state = {
      username: '',
      password: '',
      response: '',
      statusresponse:''
    }
  }
  handleInput(event){
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async onSubmit(event){
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if(username === "" || password === ""){
      this.setState({
        response: 'Faltan datos obligatorios',
        statusresponse: 'error'
      });
      setTimeout(() => {
        this.setState({
          response: '',
          statusresponse: ''
        });
      }, 4000)
      return
    }

    const payload = await Api.login(username, password)
    console.log(payload)
    // const username = payload.username
    // console.log(username)
    if(payload && payload.token && payload.token !== ""){
      console.log('redirect to home')
      localStorage.setItem('tokenapp', payload.token);
      localStorage.setItem('username', payload.username)
      this.props.history.push(`/`)
    }else{
      this.setState({
        response: 'Datos inválidos',
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

  render (){
    return(
      <div className="div">
        <NavbarH/>
        <div className="container d-flex justify-content-center mt-5 mb-5 card_create_user">
            <div className="row mb-4 align-items-center pt-4">
              <div className="col-md-6">
                <img src={desktop} alt="" className="mb-4"/>
                <h2 class="">Inicia sesión</h2>
                <p>Para ayudarte a mantener tú score</p>
              </div>
              <div className="col-12 col-md-6">
                <div className="">
                  <Form
                    className='signin-form mt-4' 
                    onSubmit={this.onSubmit.bind(this)} 
                    action=''>
                    <Form.Group controlId="username">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Usuario" 
                        name="username"
                        onChange={ this.handleInput.bind(this) }
                        autoComplete="off" 
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="" 
                        name="password"
                        onChange={ this.handleInput.bind(this) }
                      />
                    </Form.Group>
                    <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                    <div className='d-flex flex-column justify-content-center align-items-start mt-4'>
                      <Button className="submit_btn" type="submit">
                        Entrar
                      </Button>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center mt-2'>
                      <p className='noAccount'>¿Aún no tienes cuenta?</p>
                      <Link to='/signup' className="">Regístrate</Link>
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