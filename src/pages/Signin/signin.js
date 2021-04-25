// Importar modulos
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import Api from '../../lib/api'

// Import CSS
import './Signin.css'

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

              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}