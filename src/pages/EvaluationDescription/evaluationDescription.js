// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './EvaluationDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iPhase1 from '../../img/img-phase-1.svg'
import iPhase2 from '../../img/img-phase-2.svg'
import iPhase3 from '../../img/img-phase-3.svg'
import iPhase4 from '../../img/img-phase-4.svg'
import iPhaseCard from '../../img/img-phases-start.svg'

export default class EvaluationDescription extends Component {
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
                  <h2 className="mt-4 mb-4">Evaluación</h2>
                  <p className="">
                  Esta fase implica la toma de decisiones y la solución de problemas, mediante la formulación de objetivos y 
                  diseño de intervenciones de enfermería necesarias para evitar, reducir o eliminar los problemas de salud 
                  del paciente
                  </p>
                </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase1} alt="" className="elLogoCard p-2 "/>
                          </div>
                          <div className="col-6 col-md-9 mt-4">
                              <p >
                              Es la valoración de las respuestas del paciente a las intervenciones enfermeras y la comparación 
                              de las respuestas con los objetivos que se redactaron en la planeación.
                              </p>
                              
                            </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase4} alt="" className="elLogoCard p-2 "/>
                          </div>
                          <div className="col-6 col-md-9 mt-4">
                              <p> 
                              Evaluación de las respuestas del paciente:
                              </p> 
                              <p>Identificar la valoración esperada</p>  
                              <p>Obtener datos relacionados con la evolución esperada</p>
                              <p>Comparar los datos con la evolución esperada</p>      
                              <p>Relacionar las acciones de enfermería con la evolución del paciente</p>  
                              <p>Obtener conclusiones sobre el estado del problema</p>     
                              <p>Revisar y modificar el plan de cuidados del paciente</p> 
                              <p>La evaluación se establecerá con respecto a la puntuación obtenida en la evaluación</p> 
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