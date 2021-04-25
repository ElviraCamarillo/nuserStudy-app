// Importar modulos
import React, { Component } from 'react'

// Import CSS
import './Question.css'




export default class QuestionTypeTwo extends Component {
  render(){
    return(
        <div>

            <div className="container">
                <h1 className="mt-5 mb-3 title__trivia">La valoración cefalocaudal se inicia en: </h1>
            </div>

            <div className="mt-5 mb-5 grid__answers">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <button class="btn btn__answer">El abdomen</button>
                    </div>
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <button class="btn btn__answer">El cuello</button>
                    </div>
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <button class="btn btn__answer">El hombro</button>
                    </div>
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <button class="btn btn__answer">En la cabeza</button>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}
