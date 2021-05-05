// Importar modulos
import React, { Component } from "react";
// Importar componentes
import NavbarH from "../../components/Navbar/navBar";
import NavbarUser from "../../components/Navbar/navBarUser";
import Footer from "../../components/footer/footer";

// Import CSS
import "./ExecutionDescription.css";

//import images
import logoCardEjecution from "../../img/logo-card-pce-3.svg";
import iExecution from "../../img/ecg.svg";
import iExecution2 from "../../img/nursing.svg";

export default class ExecutionDescription extends Component {
  render() {
    const token = localStorage.getItem("tokenapp")
    return (
      <div className="">
        {token !== null ? <NavbarUser /> : <NavbarH />}
        <div className="container">
          <div className="row divCardValoration mb-5 ">
            <div className="col-12 col-md-3 mt-md-4 mt-lg-0">
              <img src={logoCardEjecution} alt="" className="ImgPhaseOne p-2" />
            </div>
            <div className="col-12 col-md-9">
              <h1 className="mt-4 mb-4">Ejecución</h1>
              <p className="">
                Es la cuarta etapa del proceso de enfermería la cual está
                enfocada en el inicio de aquellas intervenciones de enfermería
                que ayudan a conseguir los objetivos deseados. Es la practica
                del plan de cuidados de enfermería y finaliza con el registro de
                los cuidados prestados y las respuestas del paciente.
              </p>
            </div>
          </div>

          <div className="row divCardPhase mb-5">
            <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
              <img
                src={iExecution}
                alt=""
                className="elLogoCard p-2 mt-4 d-flex mx-auto"
              />
            </div>
            <div className="col-12 col-md-9 mt-4">
              <h3>Fases de ejecución</h3>
              <p>
                <strong>Preparación:</strong>  Revisión de las intervenciones, análisis de
                conocimientos y habilidades exigidas. Se refiere a la ejecución
                de las intervenciones de enfermería, ayuda a las actividades de
                la vida diaria
              </p>
              <p><strong> Fases de documentación:</strong> </p>
              <ul>
                <li>Formatos narrativos</li>
                <li>Formatos electrónicos</li>
                <li>Formatos estructurados</li>
              </ul>
            </div>
          </div>

          <div className="row divCardPhase mb-5">
            <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
              <img
                src={iExecution2}
                alt=""
                className="elLogoCard p-2 mt-4 d-flex mx-auto"
              />
            </div>
            <div className="col-12 col-md-9 mt-4">
              <p>Existen diferentes tipos de planeación:</p>
              <p> Inicial, continua y de alta</p>

              <p>
                <strong>Propósitos del plan de cuidados:</strong>
                
              </p>
              <ul>
                <li>Ofrecer directrices para el cuidado individualizado del
                paciente.</li>
                <li>Facilitar la comunidad de los cuidados.</li>
                <li>Favorecer la designacion del personal de enfermería.</li>
                <li>Intervencion, actividad.</li>
                <li>Redaccion de las prescripciones de enfermería.</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
