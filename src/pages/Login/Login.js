// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'

// Import CSS
import './Login.css'

import imageLogin from '../../img/img_login.svg'
import desktop from '../../img/desktop.svg'

export default class Login extends Component {
  render(){
    return(
      <div className="container">
        <NavbarH/>
        <div className="card_login d-flex">
          <div className="container_img">
            <img src={imageLogin} alt=""/>
          </div>
          <div className="container_login d-flex">
            <img src={desktop} alt=""/>
            login

          </div>
        </div>
      </div>
    )
  }
}