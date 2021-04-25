// Importar modulos
import React, { Component } from 'react'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './PanningDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iDescription from '../../img/electrocardiogram.svg'
import iPhase3 from '../../img/card.svg'

export default class PlanningDescription extends Component {
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
                  <h2 className="mt-4 mb-4">Planeación</h2>
                  <p className="">
                  Fase que implica la toma de decisiones y la solución de problemas, mediante la formulación de objetivos y 
                  diseño de intervenciones de enfermería necesarias para evitar, reducir o eliminar los problemas de salud 
                  del paciente
                  </p>
                </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iDescription} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9 mt-4">
                              <p >
                              Comprende la serie de pasos con los que la enfermera y el paciente establecen las prioridades y los objetivos 
                              para revolver o disminuir los problemas detectados en el paciente.
                              </p>
                               <p> 
                              Es una fase sistemática y deliberativa del proceso de enfermera en la que se toman decisiones y se resuelven problemas.
                              </p>  
                            </div>
              </div>

              <div className="row divCardPhase mb-5">
                          <div className="d-none d-sm-none d-md-block col-6 col-md-3 mt-md-4 mt-lg-0 ">
                              <img src={iPhase3} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
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

          </div>{/*cierre Div container general */}
          <Footer/>
      </div>
    )
  }
}