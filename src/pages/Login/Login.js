// Importar modulos
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import Api from '../../lib/api'

// Import CSS
import './Login.css'

import imageLogin from '../../img/img_login.svg'
import desktop from '../../img/desktop.svg'

export default class Login extends Component {
  constructor (props){
    super(props)
    this.state = {
      email: '',
      nameUser: '',
      imageUrlUser: '',
      response:'',
      statusreponse:''
    }
  }
  async responseGoogle(response) {
    console.log(response)
    if(response.profileObj){

      const {email, name, imageUrl} = response.profileObj
      const resApi = await Api.login(email, name, imageUrl)
      console.log(resApi)
      if(resApi.data !== "") {
        const userData = await Api.getUserSession(resApi.data)
        console.log(userData)
        
        if(userData.data.session.user._id){
          localStorage.setItem('tokenapp', resApi.data);
          localStorage.setItem('userapp', userData.data.session.user._id);
          localStorage.setItem('typeuser', userData.data.session.user.typeUser);
          localStorage.setItem('photouser', userData.data.session.user.imageUrl);
          if(userData.data.session.user.typeUser === "admin"){
            this.props.history.push(`/home/admin/${userData.data.session.user._id}`)
          } else{
            this.props.history.push(`/home/${userData.data.session.user._id}`)
          }
        }
      }
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
            <div className="col-12 col-md-6">
              <div className="container_text_login mt-5 mb-5">
                <img src={desktop} alt="" class="" />
                <h2 class="">Inicia sesión</h2>
                <p>Para ayudarte a mantener tú score</p>
                <GoogleLogin className=""
                  clientId="27723578629-id19f9kqmbgv2p1f5doah7sf4a5h1t99.apps.googleusercontent.com"
                  buttonText="Iniciar Sesión"
                  onSuccess={this.responseGoogle.bind(this)}
                  onFailure={this.responseGoogle.bind(this)}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}