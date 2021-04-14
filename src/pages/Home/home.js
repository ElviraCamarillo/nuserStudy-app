// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import CardPCE from '../../components/Card-EtapaPCE/card-PCE'
import TituloPCE from '../../components/DTituloPCE/titulo-PCE'
import Div1 from '../../components/Div1/div1'
import DregistroPCE from '../../components/DRegistroPCE/registro-PCE'
import DivBeneficios from '../../components/DivBeneficios/dBeneficios'

// Import CSS
import './Home.css'



export default class Home extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        
        <Div1/>
        <TituloPCE/>
        <CardPCE/>
        <DregistroPCE/>
        <DivBeneficios/>
        <Footer/>
      </div>
    )
  }
}