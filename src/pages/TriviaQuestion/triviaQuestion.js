// Importar modulos
import React, { Component } from 'react'
import {Card, CardDeck, ProgressBar} from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'
import TriviaQuestionOne from '../../components/Questions/questionTypeOne'
import TriviaQuestionTwo from '../../components/Questions/questionTypeTwo'
import ResponseError from '../../components/Questions/responseError'
import ResponseSucess from '../../components/Questions/responseSuccess'

import imageQuestion from '../../img/image__question.png';


// Import CSS
import './TriviaQuestion.css'




export default class TriviasQuestionPage extends Component {
  render(){
    return(
      <div>
        <NavbarH/>
        <div className="container contianer__trivia">
            <div className="mt-5 wrap__info__trivia">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <strong>Trivia</strong>
                            <span>Etapas del Proceso Cuidado Enfermero</span>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-end">
                            Nivel <b className="ml-2">1</b>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="mt-3 wrap__img__question">
                <img src={imageQuestion} alt="image question"/>
            </div>

            {/* <TriviaQuestionOne/> */}

            <TriviaQuestionTwo/>
            {/* <ResponseError/> */}
            {/* <ResponseSucess/> */}


            <div className="row mb-5">
                <div className="col-12 text-center">
                    <button className="btn btn__send__answer">
                        Continuar
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="black" fill-opacity="0.2"/>
                            <path d="M18.96 22.1604L24 16.2804L18.96 10.4004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.0002 16.2803H7.2002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
