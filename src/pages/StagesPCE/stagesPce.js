// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import TituloPCE from '../../components/DTituloPCE/titulo-PCE'

// Import CSS
import './StagesPCE.css'

import elLogoCard from '../../img/logo-card-pce-1.svg'
import laFlechaCard from '../../img/flecha-vector-card.svg'
import student from '../../img/reading.svg'

export default class StagesPCE extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <TituloPCE/>
        <div className="container">
        <div className="row divCardValoration mb-5 ">
            <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
              <img src={elLogoCard} alt="" className="elLogoCard p-2"/>
            </div>
            <div className="col-6 col-md-9">
              <h2 className="mt-4 mb-4">Valoración</h2>
              <p className="">
                Recolección de datos, organización, ponderación y registro de los datos sobre <br/>el estado de salud del paciente
              </p>
              <a href= "{url}"className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>
          </div>
          
          <div className="row d-flex justify-content-center">
              <div className="divCardValoration col-12 col-lg-6 d-flex justify-content-between mb-5 p-3">
                <div className="my-auto mr-4">
                  <img src={elLogoCard} alt="" className="logoCardDiagnostic p-2"/>
                </div>
                <div className="divCardContent flex-column">
                  <h2 className="mt-4 mb-4">Diagnóstico</h2>
                  <p className="">
                    Consiste en la identificación de los problemas reales y potenciales, así como los recursos con los que cuenta el 
                    paciente mediante el análisis de datos
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
                    Comprende la serie de pasos con los que la enfermera y el paciente establecen las prioridades y los objetivos para
                    revolver o disminuir los problemas detectados en el paciente.
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
              Es la practica del plan de cuidados de enfermería y finaliza con el registro de los cuidados prestados y las respuestas 
              del paciente.
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
              Es la valoración de las respuestas del paciente a las intervenciones enfermeras y la comparación de las respuestas con los objetivos 
              que se redactaron en la planeación.
              </p>
              <a href= ""className="linkPCE mb-2" >Saber más<img src={laFlechaCard}alt=""className="flechaVector"/> </a>
            </div>
          </div>

        </div>

      {/*etiqueta */}
      
      <div className=" row  mb-5 ">
          <div className="cardStart col-md-8 offset-2  d-flex  justify-content-center align-item-center">
               <div className="bor col-6">
                    <p className="textCardStart mt-4">¿Listo para<br/> poner a prueba<br/> lo aprendido?</p>
                    <Button bsPrefix="buttonCardStart mt-3 " >Empezar</Button>
                </div>
                <div className="col-6 ">
                    <img src={student}alt="" className=""/>
                </div>
          </div>
        </div>
            

        

        </div>{/*cierre Div container general */}
        <Footer/>
      </div>
    )
  }
}