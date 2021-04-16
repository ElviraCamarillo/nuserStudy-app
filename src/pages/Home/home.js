// Importar modulos
import React, { Component } from 'react'
//importar elementos de bootstra
import { Button } from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import CardPCEOne from '../../components/CardPCE/cardPCE'
import TituloPCE from '../../components/DTituloPCE/titulo-PCE'
import DivBeneficios from '../../components/DivBeneficios/dBeneficios'

// Import CSS
import './Home.css'

//Importar imagenes 
import nurseHome from '../../img/img-nurse-home.svg'
import flechaHorizontal from '../../img/img-btn-s1.svg'
import arrowBtn from '../../img/flecha-vector-btn.svg'
import elLogoCard from '../../img/logo-card-pce-1.svg'
import laFlechaCard from '../../img/flecha-vector-card.svg'



export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="">
        <NavbarH/>
        <div className = "container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-6 mb-5 d-flex justify-content-start flex-column">
              <h1 className="titleHome ">Aprendamos juntos sobre el Proceso Cuidado Enfermero</h1>
              <p className="textHome mt-3  mt-md-5  mb-3 mb-md-5">Te brindamos las herramientas necesarias para que refuerces tu conocimiento acerca del Proceso de Cuidado Enfermero</p>
              <Button bsPrefix="buttonHome buttonHomePrincipal" >Conoce más<img src={flechaHorizontal}alt="" className="pl-3"/></Button>
            </div> 
            <div className="col-12 col-md-6">
              <img src={nurseHome}alt=""/>
            </div>
          </div>
        <TituloPCE/>
        <div className="row divCardValoration mb-5">
          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
            <img src={elLogoCard} alt="" className="elLogoCard"/>
          </div>
          <div className="col-6 col-md-9">
            <h2 className="mt-4 mb-4">Valoración</h2>
            <p className="">
              Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
            </p>
            <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="divCardValoration col-12 col-lg-6 d-flex justify-content-between mb-5">
            <div className="my-auto mr-4">
              <img src={elLogoCard} alt="" className="logoCardDiagnostic"/>
            </div>
            <div className="flex-column">
              <h2 className="mt-4 mb-4">Diagnóstico</h2>
              <p className="">
                Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
              </p>
              <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>
          </div>
          <div className="divCardValoration col-12 col-lg-6 d-flex justify justify-content-between mb-5">
            <div className="my-auto mr-4">
              <img src={elLogoCard} alt="" className="logoCardDiagnostic"/>
            </div>
            <div className=" flex-column">
              <h2 className="mt-4 mb-4">Planeación</h2>
              <p className="">
                Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
              </p>
              <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="divCardValoration col-12 col-lg-6 d-flex justify-content-between mb-5 ">
            <div className="my-auto mr-4">
              <img src={elLogoCard} alt="" className="logoCardDiagnostic"/>
            </div>
            <div className=" flex-column">
              <h2 className="mt-4 mb-4">Ejecución</h2>
              <p className="">
                Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
              </p>
              <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>
          </div>
          <div className="divCardValoration col-12 col-lg-6 d-flex justify-content-between mb-5">
            <div className="my-auto mr-4">
              <img src={elLogoCard} alt="" className="logoCardDiagnostic"/>
            </div>
            <div className=" flex-column">
              <h2 className="mt-4 mb-4">Evaluación</h2>
              <p className="">
                Recolección de datos, organización, ponderación y registro de los datos sobre el estado de salud del paciente
              </p>
              <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>





          </div>

        </div>
        <div className="row">
          <div className="dRegistroPCE col-12 mt-5 text-center">
            <h2 className="mb-4">Click aquí para crear registro</h2>
            <Button bsPrefix="buttonHome p-2">Proceso Cuidado Enfermero
            <img src={arrowBtn}alt="" className="vectorBtn"/>
            </Button>
          </div>
        </div>

        </div>
            
        <DivBeneficios/>
        <Footer/>
      </div>
    )
  }
}