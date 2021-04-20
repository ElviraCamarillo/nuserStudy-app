// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './DiagnosisDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iPhase1 from '../../img/img-phase-1.svg'
import iPhase2 from '../../img/img-phase-2.svg'
import iPhase3 from '../../img/img-phase-3.svg'
import iPhase4 from '../../img/img-phase-4.svg'
import iPhaseCard from '../../img/img-phases-start.svg'

export default class DiagnosisDescription extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <div className="container">

              <div className="row divCardValoration mb-5 ">
                <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                  <img src={elLogoCard} alt="" className="ImgPhaseOne p-2"/>
                </div>
                <div className="col-6 col-md-9">
                  <h2 className="mt-4 mb-4">Diagnostico</h2>
                  <p className="">
                  Segunda fase del proceso de enfermería. En esta fase se interpretan los datos mediante un enunciado 
                  de juicio clínico y se identifican las fortalezas y problemas del paciente.<br/>
                  </p>
                </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase1} alt="" className="elLogoCard p-2 "/>
                          </div>
                          <div className="col-6 col-md-9 mt-4">
                              <p >
                              Consiste en la identificación de los problemas reales y potenciales, así como los recursos con los que cuenta el 
                              paciente mediante el análisis de datos
                              </p>
                              
                              
                            </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase2} alt="" className="elLogoCard p-2 "/>
                          </div>
                          <div className="col-6 col-md-9 mt-4">
                              <p >
                              Es un juicio clínico sobre la respuesta de un individuo, familia o una comunidad frente a los 
                              procesos vitales o problemas de salud
                              </p>                    
                            </div>
              </div>
       
              <div className="row divCardPhase mb-5">
                          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase3} alt="" className="elLogoCard p-2 "/>
                          </div>
                          <div className="col-6 col-md-9 mt-4">
                              <p >
                                El proceso de diagnostico incluye: 
                              </p>                      
                              <p>
                              Análisis: Recolección de datos significativos y relación con los 13 dominios
                              </p>
                              <p>
                              Identificación: reconocer los tipos de Dx, real, riesgo, salud y bienestar  
                              </p>
                              <p>
                              Formulación de PES
                              </p>
                            </div>
              </div>

            
      
              <div className=" row  mb-5 ">
                  <div className="cardStart col-md-8 offset-2  d-flex  justify-content-center align-item-center">
                      <div className="bor col-6">
                            <p className="textCardStart mt-4">¿Listo para<br/> poner a prueba<br/> lo aprendido?</p>
                            
                            <Button bsPrefix="buttonCardStart mt-3 "  >Empezar</Button>
                            
                            
                      </div>
                      <div className="col-6 ">
                            <img src={iPhaseCard}alt="" className=""/>
                      </div>
                  </div>
              </div>

                
          </div>{/*cierre Div container general */}
          <Footer/>
      </div>
    )
  }
}