// Importar modulos
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import Api from '../../lib/api'

// Import CSS
import './Singup.css'

import imageLogin from '../../img/img_login.svg'
import desktop from '../../img/desktop.svg'

export default class Signin extends Component {

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
  
  

  render (){
    return(
      <div>
        <NavbarH/>
        <div className="container d-flex justify-content-center mt-3 mb-3 ">
          <div className="row mb-4 card_login">
            <div className="col-12 col-md-6 d-none d-md-block">
              <img src={imageLogin} alt=""/>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="container_text_login mt-5 mb-5">
                <img src={desktop} alt="" class="" />
                <h2 class="">Registrarse</h2>
                <p>Para ayudarte a mantener tú score</p>
                <form 
                  className='signin-form d-flex flex-column card__app p-5 rounded' 
                  onSubmit={this.onSubmit.bind(this)} 
                  action=''>
                  <label className='' for="name-signin">Nombre:</label>
                  <input 
                    type="text" 
                    id="name-signin" 
                    name="name"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />
                  <label className='' for="lastname-signin">Apellidos:</label>
                  <input 
                    type="text" 
                    id="lastname-signin" 
                    name="lastname"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />

                  <label className='' for="email-signin">Correo electrónico:</label>
                  <input 
                    type="email" 
                    id="email-signin" 
                    name="email"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off"
                  />
                  <label className='' for="password-signin">Contraseña:</label>
                  <input 
                    type="password" 
                    id="password-signin" 
                    name="password"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />
                  <label className='' for="verifyPass-signin">Verifica tu contraseña:</label>
                  <input 
                    type="password" 
                    id="verifyPass-signin" 
                    name="verifyPass"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off"
                  />
                  <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                  
                  <div className='d-flex flex-column justify-content-center align-items-start mt-4'>
                    <button className="btn__app btn__dark large" type="submit">REGÍSTRATE</button>
                  </div>  

                   

                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}