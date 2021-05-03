// Importar modulos
import React, { Component } from "react";
// Importar componentes
import NavbarH from "../../components/Navbar/navBar";
import NavbarUser from "../../components/Navbar/navBarUser";
import Footer from "../../components/footer/footer";

// Import CSS
import "./EvaluationDescription.css";

//import images
import logoCardEvaluation from "../../img/logo-card-pce-5.svg";
import iEvaluation from "../../img/blood.svg";
import iEvaluation2 from "../../img/medical.svg";

export default class EvaluationDescription extends Component {
  render() {
    const token = localStorage.getItem("tokenapp");
    console.log(token);
    return (
      <div className="">
        {token !== null ? <NavbarUser /> : <NavbarH />}
        <div className="container">
          <div className="row divCardValoration mb-5 ">
            <div className="col-12 col-md-3 mt-md-4 mt-lg-0">
              <img src={logoCardEvaluation} alt="" className="ImgPhaseOne p-2" />
            </div>
            <div className="col-12 col-md-9">
              <h2 className="mt-4 mb-4">Evaluación</h2>
              <p className="">
                Esta fase implica la toma de decisiones y la solución de
                problemas, mediante la formulación de objetivos y diseño de
                intervenciones de enfermería necesarias para evitar, reducir o
                eliminar los problemas de salud del paciente
              </p>
            </div>
          </div>

          <div className="row divCardPhase mb-5">
            <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
              <img
                src={iEvaluation}
                alt=""
                className="elLogoCard p-2 mt-4 d-flex mx-auto"
              />
            </div>
            <div className="col-12 col-md-9 mt-4">
              <p>
                Es la valoración de las respuestas del paciente a las
                intervenciones enfermeras y la comparación de las respuestas con
                los objetivos que se redactaron en la planeación.
              </p>
            </div>
          </div>

          <div className="row divCardPhase mb-5">
            <div className="d-md-block col-12 col-md-3 mt-md-4 mt-lg-0">
              <img
                src={iEvaluation2}
                alt=""
                className="elLogoCard p-2 mt-4 d-flex mx-auto"
              />
            </div>
            <div className="col-12 col-md-9 mt-4">
              <p>Evaluación de las respuestas del paciente:</p>
              <ul>
                <li>Identificar la valoración esperada.</li>
                <li>Obtener datos relacionados con la evolución esperada.</li>
                <li>Comparar los datos con la evolución esperada.</li>
                <li>Relacionar las acciones de enfermería con la evolución del
                paciente.</li>
                <li>Obtener conclusiones sobre el estado del problema.</li>
                <li>Revisar y modificar el plan de cuidados del paciente.</li>
                <li>La evaluación se establecerá con respecto a la puntuación
                obtenida en la evaluación.</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
