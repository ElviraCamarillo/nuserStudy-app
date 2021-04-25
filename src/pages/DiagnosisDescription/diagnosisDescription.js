// Importar modulos
import React, { Component } from 'react'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import NavbarUser from '../../components/Navbar/navBarUser'
import Footer from '../../components/footer/footer'

// Import CSS
import './DiagnosisDescription.css'

//import images
import elLogoCard from '../../img/logo-card-pce-1.svg'

import iDiagnosis from '../../img/bacteria.svg'
import iDiagnosis2 from '../../img/health-report.svg'


export default class DiagnosisDescription extends Component {
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
                  <h2 className="mt-4 mb-4">Diagnostico</h2>
                  <p className="">
                  Segunda fase del proceso de enfermería. En esta fase se interpretan los datos mediante un enunciado 
                  de juicio clínico y se identifican las fortalezas y problemas del paciente.<br/>
                  </p>
                  
                </div>
              </div>

              
              <div className="row divCardPhase mb-5">
                          <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iDiagnosis} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-6 col-md-9 mt-4">
                            <p >
                            Consiste en la identificación de los problemas reales y potenciales, así como los recursos con los que cuenta el 
                            paciente mediante el análisis de datos
                            </p>
                            <p >
                            Es un juicio clínico sobre la respuesta de un individuo, familia o una comunidad frente a los 
                            procesos vitales o problemas de salud
                            </p>                    
                          </div>
              </div>
       
              <div className="row divCardPhase mb-5">
                          <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
                              <img src={iDiagnosis2} alt="" className="elLogoCard p-2 mt-4 d-flex mx-auto"/>
                          </div>
                          <div className="col-12 col-md-9 mt-4">
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

            
                
          </div>{/*cierre Div container general */}
          <Footer/>
      </div>
    )
  }
}