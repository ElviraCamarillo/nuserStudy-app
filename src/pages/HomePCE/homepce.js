// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import CardPCE from '../../components/Card-EtapaPCE/card-PCE'
import TituloPCE from '../../components/DTituloPCE/titulo-PCE'

// Import CSS
import './HomePCE.css'



export default class Home extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <TituloPCE/>
        <CardPCE/>
        <Footer/>
      </div>
    )
  }
}