// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './ExecutionDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iPhase1 from '../../img/img-phase-1.svg'
import iPhase2 from '../../img/img-phase-2.svg'
import iPhase3 from '../../img/img-phase-3.svg'
import iPhase4 from '../../img/img-phase-4.svg'
import iPhaseCard from '../../img/img-phases-start.svg'

export default class ExecutionDescription extends Component {
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
                  <h2 className="mt-4 mb-4">Ejecución</h2>
                  <p className="">
                  Es la cuarta etapa del proceso de enfermería la cual está enfocada en el inicio de aquellas 
                  intervenciones de enfermería que ayudan a conseguir los objetivos deseados.
                  Es la practica del plan de cuidados de enfermería y finaliza con el registro de los 
                              cuidados prestados y las respuestas del paciente.
                  </p>
                </div>
              </div>
              
              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase2} alt="" className="elLogoCard p-2 mt-4"/>
                          </div>
                          <div className="col-12 col-md-9 mt-4">
                              <p> 
                                  Fases de ejecución: 
                              </p>     
                              <p>
                              Preparación: Revisión de las intervenciones, análisis de conocimientos y habilidades exigidas.
                              Se refiere a la ejecución de las intervenciones de enfermería, ayuda a las actividades de la vida diaria
                              </p>    
                              <p>
                                Fases de documentación: 
                              </p> 
                              <p>
                                 *Formatos narrativos
                                 *Formatos electronicos
                                 *Formatos estructurados 
                              </p>        
                            </div>
              </div>
       
              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase3} alt="" className="elLogoCard p-2 mt-4"/>
                          </div>
                          <div className="col-12 col-md-9 mt-4">
                              <p >
                              Existen diferentes tipos de planeación: 
                              </p>                      
                              <p> Inicial, continua y de alta</p>
                              <p> Propósitos del plan de cuidados:
                                  <br/>
                                  *Ofrecer directrices para el cuidado individualizado del paciente.<br/>
                                  *Facilitar la comunidad de los cuidados.<br/>
                                  *Favorecer la designacion del personal de enfermería.<br/>
                                  *Intervencion, actividad.<br/>
                                  *Redaccion de las prescripciones de enfermería.<br/>
                              </p>
                            </div>
              </div>

              
      
              <div className=" row  mb-5 justify-content-center">
                  <div className="cardStart col-12 col-md-8 d-flex  justify-content-center align-item-center">
                      <div className=" col-6">
                            <p className="textCardStart mt-4">¿Listo para<br/> poner a prueba<br/> lo aprendido?</p>
                            
                            <Button bsPrefix="buttonCardStart mt-3 mb-3"  >Empezar</Button>
                            
                            
                      </div>
                      <div className="d-none d-sm-none d-md-block col-6 ">
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