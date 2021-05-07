// Importar modulos
import React, { Component } from 'react'
//importar elementos de bootstrap
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'


// Import CSS
import './Error404.css'

//Importar imagenes
import sick from '../../img/img-Error404.svg'
import arrowBtnError from '../../img/img-btn-error.svg'


export default class Error extends Component {

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
                        <h1 className="text404 ">404</h1>
                        <h2 className="textPageError mt-5">Página no encontrada</h2>
                        <Link className=" d-flex justify-content-center" to="/">
                          <Button bsPrefix="buttonCardStart mt-3 mb-4 d-flex justify-content-center align-items-center" >
                              <span className="txtOnBtn">Ir a inicio</span>
                              <img src={arrowBtnError}alt="" className="ml-4"/>
                          </Button>
                        </Link>
                    </div>
                </div>
            </div>
       </div>
        <Footer/>
      </div>
    )
  }
}