// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './ValorationDescription.css'

import elLogoCard from '../../img/logo-card-pce-1.svg'
import student from '../../img/reading.svg'

export default class ValorationDescription extends Component {
  render(){
    return(
      <div className="">
        <NavbarH/>
        <div className="container">
        <div className="row divCardValoration mb-5 ">
            <div className="col-6 col-md-3 mt-md-4 mt-lg-0">
              <img src={elLogoCard} alt="" className="elLogoCard p-2"/>
            </div>
            <div className="col-6 col-md-9">
              <h2 className="mt-4 mb-4">Valoración</h2>
              <p className="">
                La Valoración es la Recogida, organización, validación y registro de los datos,
                 para obtener una imagen clara y completa de las necesidades de la persona, sus problemas y capacidades.
                Su finalidad es crear una base de datos sobre las respuestas de 
                una persona ante la salud o la enfermedad con el fin de conocer los cuidados de enfermería que necesita.
                Incluye: Experiencias relacionadas, Problemas de salud, Prácticas sanitarias, Estilos de vida, Valores.<br/>
                Consta de diferentes tipos; Inicial -Se realiza en el ingreso a la institución sanitaria, para establecer una identificación del paciente, 
                del problema, referencias y futuras complicaciones. Centrada en el problema -Determina el estado de un problema identificado 
                en la valoración inicial. Urgente: -Identifica problemas peligrosos para la vida, durante alguna crisis fisiológica 
                o psicológica del paciente. Revaloracion tras un tiempo: -Compara el estado actual del paciente con los datos anteriormente obtenidos.
              </p>
            </div>
        </div>
        <p>Fases</p>
        <div>
            <div>
                <img src={elLogoCard} alt="" className="elLogoCard p-2"/>
            </div>
            <div>
                <h3>1-Obtención de datos</h3>
                <p >
                    Es el proceso esencial que se inicia con el primer contacto con persona, familia o comunidad, para 
                    la adquisición de la información sobre el estado de salud del paciente.
                </p>
                <p>Su clasificacion es; INICIAL: Primera entrevista con la persona que constituye el punto de partida.
                 FOCALIZADA: Identifica de manera específica el problema.
                </p>
                <p>Comprende: Estilos de vida.	Problemas actuales. Antecedentes patológicos, heredofamiliares, quirúrgicos etc.
                    Anamnesis y valoración física realizada por el médico y enfermería.                                                         
                    Resultados pruebas de laboratorio y diagnósticas. 
                    Material aportado por otros profesionales sanitarios.
                </p>

                <p> Existen diferentes tipos de datos; Objetivos: 
                    Signos o datos evidentes y pueden ser detectados por el observador, medidos y confirmados, 
                    mediante los sentidos y/o escalas de medición 
                    Subjetivos: Datos que solo resultan aparentes
                    para la persona afectado y solo ella puede describirlos o comprobarlos.
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