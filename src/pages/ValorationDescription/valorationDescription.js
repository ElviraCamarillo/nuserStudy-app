// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './ValorationDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iPhase1 from '../../img/img-phase-1.svg'
import iPhase2 from '../../img/img-phase-2.svg'
import iPhase3 from '../../img/img-phase-3.svg'
import iPhase4 from '../../img/img-phase-4.svg'
import iPhaseCard from '../../img/img-phases-start.svg'

export default class ValorationDescription extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <div className="container">

              <div className="row divCardValoration mb-5 mt-5">
                <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
                  <img src={elLogoCard} alt="" className="ImgPhaseOne p-2"/>
                </div>
                <div className="col-6 col-md-9">
                  <h2 className="mt-4 mb-4">Valoración</h2>
                  <p className="">
                    La Valoración es la Recogida, organización, validación y registro de los datos,
                    para obtener una imagen clara y completa de las necesidades de la persona, sus problemas y capacidades.
                    Su finalidad es crear una base de datos sobre las respuestas de 
                    una persona ante la salud o la enfermedad con el fin de conocer los cuidados de enfermería que necesita.
                    Incluye: Experiencias relacionadas, Problemas de salud, Prácticas sanitarias, Estilos de vida, Valores.<br/>
                  </p>
                </div>
              </div>

              <h1>Fases</h1>

              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase1} alt="" className=" elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9">
                              <h3 className="mt-4 mb-4">1-Obtención de datos</h3>
                              <p >
                              Consta de diferentes tipos; Inicial -Se realiza en el ingreso a la institución sanitaria, para establecer una identificación del paciente, 
                              del problema, referencias y futuras complicaciones. Centrada en el problema -Determina el estado de un problema identificado 
                              en la valoración inicial. Urgente: -Identifica problemas peligrosos para la vida, durante alguna crisis fisiológica 
                              o psicológica del paciente. Revaloracion tras un tiempo: -Compara el estado actual del paciente con los datos anteriormente obtenidos.
                            
                              </p>
                              
                              <p> Tiene diferentes métodos y tecnicas por ejemplo; Observación:
                                  Es un proceso lógico y deliberado, para obtener información selectiva, objetiva y organizada a 
                                  través de los órganos de los sentidos.  Entrevista:
                                  Es una conversación planificada para dar y obtener información e identificar problemas 
                                  Exploración física:
                                  Tiene como objetivos: confirmar los datos obtenidos, detectar nuevos signos o síntomas. Se puede llevar a cabo por aparatos y sistemas o de forma cefalocaudal. 
                                  Se utilizan métodos y técnicas las cuales son:
                                  Inspección, palpación, auscultación y percusión
                              </p>
                              
                            </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase2} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9">
                              <h3 className="mt-4 mb-4">2-Validación de datos</h3>
                              <p >
                              Verificar y confirmar los datos para determinar si responden a los hechos. A través de escalas de medición, datos críticos, congruencia de datos etc.
                              </p>  
                              <p> Existen diferentes tipos de datos; Objetivos: 
                                  Signos o datos evidentes y pueden ser detectados por el observador, medidos y confirmados, 
                                  mediante los sentidos y/o escalas de medición 
                                  Subjetivos: Datos que solo resultan aparentes
                                  para la persona afectado y solo ella puede describirlos o comprobarlos.
                              </p>                    
                            </div>
              </div>
       
              <div className="row divCardPhase mb-5">
                          <div className=" d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase3} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9">
                              <h3 className="mt-4 mb-4">3-Organización de datos</h3>
                              <p >
                              Consiste en la agrupación de los datos en categorías de información de forma que tengan sentido, puedan verse las relaciones entre ellos e identificar 
                              las capacidades del paciente, y sus problemas de salud reales y potenciales. 
                              Para la organización de datos se utilizan los modelos o teorías propuestos por las diferentes teóricas de enfermería.

                              </p>                      
                            </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iPhase4} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9">
                              <h3 className="mt-4 mb-4">4-Registro de datos</h3>
                              <p >
                              Consiste en informar y registrar los datos que se obtuvieron durante la observación, entrevista y exploración física. 
                              </p>                      
                            </div>
              </div>
      
              <div className=" row  mb-5 justify-content-center ">
                  <div className="cardStartValoration col-12 col-md-8  d-flex  justify-content-center align-item-center">
                      <div className=" col-6">
                            <p className="textCardStart mt-4">¿Listo para poner a prueba lo aprendido?</p>
                            
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