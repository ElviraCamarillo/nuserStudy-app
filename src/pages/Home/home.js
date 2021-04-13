// Importar modulos
import React, { Component } from 'react'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import div1 from '../../components/Div1/div1'


// Import CSS
import './Home.css'
import '../../components/footer/footer.css'
import Div1 from '../../components/Div1/div1'


export default class Home extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>

        <Div1/>

        <Footer/>
      </div>
    )
  }
}