// Importar modulos
import React, { Component } from 'react'
//importar elementos de bootstra
import { Button } from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'


// Import CSS
import './Error404.css'

//Importar imagenes
import sick from '../../img/img-Error404.svg'
import arrowBtnError from '../../img/img-btn-error.svg'

import flechaHorizontal from '../../img/img-btn-s1.svg'
import arrowBtn from '../../img/flecha-vector-btn.svg'
import laFlechaCard from '../../img/flecha-vector-card.svg'



export default class Error extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="">
        <NavbarH/>
        <div className = "container">
            <div className="row justify-content-center mt-5 ">
                <img src={sick}alt="" className=""/>
            </div>
            <div className=" row  mb-5 justify-content-center mt-5">
                <div className=" col-12 col-md-10 col-lg-12 d-flex  justify-content-center align-item-center">
                    
                    <div className="  col-12  text-center">
                        <hi className="text404 ">404</hi>
                        <h2 className="textPageError mt-5">Página no encontrada</h2>
                        <Button bsPrefix="buttonCardStart mt-3 mb-4" >
                            <a href="/" className="txtOnBtn">Ir a inicio </a>
                        <img src={arrowBtnError}alt="" className="ml-4"/>
                        </Button>
                    </div>
                </div>
            </div>
          

       </div>
            
       

        <Footer/>
      </div>
    )
  }
}