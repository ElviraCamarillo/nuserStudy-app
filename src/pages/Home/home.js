// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'


// Import CSS
import './Home.css'


export default class Home extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <Footer/>
      </div>
    )
  }
}