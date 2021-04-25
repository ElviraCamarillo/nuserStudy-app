// Importar modulos
import React, { Component } from 'react'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import NavbarUser from '../../components/Navbar/navBarUser'
import Footer from '../../components/footer/footer'

// Import CSS
import './ExecutionDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'
import iExecution from '../../img/ecg.svg'
import iExecution2 from '../../img/nursing.svg'

export default class ExecutionDescription extends Component {
  render(){
    const token =  localStorage.getItem('tokenapp')
    console.log(token)
    return(
      <div className="">
        {token !== null
          ?   
          <NavbarUser/>
          :
          <NavbarH/>
        }
        <div className="container">

              <div className="row divCardValoration mb-5 ">
                <div className="col-12 col-md-3 mt-md-4 mt-lg-0">
                  <img src={elLogoCard} alt="" className="ImgPhaseOne p-2"/>
                </div>
                <div className="col-12 col-md-9">
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
                          <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iExecution} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
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
                          <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iExecution2} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
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