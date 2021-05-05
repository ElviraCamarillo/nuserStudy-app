// Importar modulos
import React, { Component } from "react";
//importar elementos de bootstra
import { Button } from "react-bootstrap";

// Importar componentes
import NavbarH from "../../components/Navbar/navBar";
import NavbarUser from "../../components/Navbar/navBarUser";
import Footer from "../../components/footer/footer";
import TituloPCE from "../../components/DTituloPCE/titulo-PCE";

// Import CSS
import "./Home.css";

//Importar imagenes
import nurseHome from "../../img/img-nurse-home.svg";
import flechaHorizontal from "../../img/img-btn-s1.svg";
import arrowBtn from "../../img/flecha-vector-btn.svg";
import logoCardValoration from "../../img/logo-card-pce-1.svg";
import laFlechaCard from "../../img/flecha-vector-card.svg";
import nurseBeneficios from "../../img/img-nurse-dbeneficios.svg";
import logoCardDiagnosis from "../../img/logo-card-pce-2.svg";
import logoCardEjecution from "../../img/logo-card-pce-3.svg";
import logoCardPlanning from "../../img/logo-card-pce-4.svg";
import logoCardEvaluation from "../../img/logo-card-pce-5.svg";

export default class Home extends Component {
  render() {
    const token = localStorage.getItem("tokenapp")
    return (
      <div className="">
        {token !== null ? <NavbarUser /> : <NavbarH />}
        <div className="container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-6 mb-5 d-flex justify-content-start flex-column">
              <h1 className="titleHome ">
                Aprendamos juntos sobre el Proceso Cuidado Enfermero
              </h1>
              <p className="textHome mt-3  mt-md-5  mb-3 mb-md-5">
                Te brindamos las herramientas necesarias para que refuerces tu
                conocimiento acerca del Proceso de Cuidado Enfermero
              </p>
              <Button bsPrefix="buttonHome buttonHomePrincipal">
                <a href="" className="textOnBtn">
                  Conoce más
                </a>
                <img src={flechaHorizontal} alt="Conoce más" className="pl-3" />
              </Button>
            </div>
            <div className="col-12 col-md-6">
              <img src={nurseHome} alt="nurse home" />
            </div>
          </div>
          <TituloPCE />
          <div className="row d-flex justify-content-center list_stages">
            <div className="col-12">
              <div className="row mb-5">
                <div className="col-12 d-flex justify-content-between mb-5 p-3  card_container_stage valoration">
                  <div className="my-auto mr-4">
                    <img
                      src={logoCardValoration}
                      alt="Valoration"
                      className="elLogoCard p-2"
                    />
                  </div>
                  <div className="flex-column card_info_stage ">
                    <h2 className="mt-4 mb-4">Valoración</h2>
                    <p className="">
                      Recolección de datos, organización, ponderación y registro
                      de los datos sobre el estado de salud del paciente
                    </p>
                    <a className="linkPCE mb-2" href="pce/valoracion">
                      Saber más
                      <img
                        src={laFlechaCard}
                        alt="arrow vector"
                        className="flechaVector"
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center list_stages">
            <div className=" col-12 col-lg-6 d-flex justify-content-between mb-5 p-3 card_container_stage diagnosis">
              <div className="my-auto mr-4">
                <img
                  src={logoCardDiagnosis}
                  alt="Diagnosis"
                  className="logoCardDiagnostic p-2"
                />
              </div>
              <div className="flex-column card_info_stage ">
                <h2 className="mt-4 mb-4">Diagnóstico</h2>
                <p className="">
                  Consiste en la identificación de los problemas reales y
                  potenciales, así como los recursos con los que cuenta el
                  paciente mediante el análisis de datos
                </p>
                <a className="linkPCE mb-2" href="/pce/diagnostico">
                  Saber más
                  <img
                    src={laFlechaCard}
                    alt="nurse diagnostico"
                    className="flechaVector"
                  />
                </a>
              </div>
            </div>

            <div className=" col-12 col-lg-6 d-flex justify justify-content-between mb-5 card_container_stage planning">
              <div className="my-auto mr-4">
                <img
                  src={logoCardPlanning}
                  alt="Planning"
                  className="logoCardDiagnostic"
                />
              </div>
              <div className=" flex-column card_info_stage ">
                <h2 className="mt-4 mb-4">Planeación</h2>
                <p className="">
                  Comprende la serie de pasos con los que la enfermera y el
                  paciente establecen las prioridades y los objetivos para
                  revolver o disminuir los problemas detectados en el paciente.
                </p>
                <a className="linkPCE mb-2" href="/pce/planeacion">
                  Saber más
                  <img
                    src={laFlechaCard}
                    alt="Arrow Planning"
                    className="flechaVector"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row list_stages">
            <div className="col-12 col-lg-6 d-flex justify-content-between mb-5 card_container_stage execution">
              <div className="my-auto mr-4">
                <img
                  src={logoCardEjecution}
                  alt="Arrow Ejecution"
                  className="logoCardDiagnostic"
                />
              </div>
              <div className=" flex-column card_info_stage ">
                <h2 className="mt-4 mb-4">Ejecución</h2>
                <p className="">
                  Es la practica del plan de cuidados de enfermería y finaliza
                  con el registro de los cuidados prestados y las respuestas del
                  paciente.
                </p>
                <a className="linkPCE mb-2" href="/pce/ejecucion">
                  Saber más
                  <img
                    src={laFlechaCard}
                    alt="Ejecución"
                    className="flechaVector"
                  />
                </a>
              </div>
            </div>

            <div className=" col-12 col-lg-6 d-flex justify-content-between mb-5 card_container_stage evaluation">
              <div className=" my-auto mr-4">
                <img
                  src={logoCardEvaluation}
                  alt=""
                  className="logoCardDiagnostic"
                />
              </div>
              <div className="divCardEvaluation flex-column card_info_stage ">
                <h2 className="mt-4 mb-4">Evaluación</h2>
                <p className="">
                  Es la valoración de las respuestas del paciente a las
                  intervenciones enfermeras y la comparación de las respuestas
                  con los objetivos que se redactaron en la planeación.
                </p>
                <a className="linkPCE mb-2" href="/pce/evaluacion">
                  Saber más
                  <img
                    src={laFlechaCard}
                    alt=""
                    className="flechaVector"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
          {/*separador */}
          {token === null ? (
            <div className="row">
              <div className="dRegistroPCE col-12 mt-5 text-center">
                <h2 className="mb-4">Click aquí para registrarte</h2>
                <Button href="/signin" bsPrefix="buttonHome p-2">
                  Crear Cuenta
                  <img src={arrowBtn} alt="" className="vectorBtn" />
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="container ">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-12 col-md-6 text-center">
                <img src={nurseBeneficios} alt="" />
              </div>
              <div className="col-12 col-md-6 mb-5 d-flex justify-content-start flex-column">
                <h1 className="titleHome ">
                  Beneficios de usar
                  <br /> NurseStudy
                </h1>
                <p className="textHome mt-5  mb-5">
                  Te brindamos las herramientas necesarias para que refuerces tu
                  conocimiento acerca del Proceso de Cuidado Enfermero
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
