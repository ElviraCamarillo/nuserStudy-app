// Importar modulos
import React, { Component } from 'react'
import { Link } from "react-router-dom"

// Import CSS
import './TriviaResult.css'

export default class TriviaResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props
        }
    }

    render(){
        // const token =  localStorage.getItem('tokenapp')
        // const path = window.location.pathname.split('/')
        // const idMeth = path[path.length - 3]
        // console.log(this.state.data.methodology)
        // console.log(idMeth)
        return(
        <div>
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

                    <div className="mt-5 card__result">
                        <h1>¡Felicidades!</h1>
                        <p>Has terminado este nivel</p>
                        {/* <strong><b>10</b> de <b>15</b> correctas</strong> */}

                        <div className="row mb-5 mt-5">
                            <div className="col-12 text-center">
                                {/* <button className="btn btn__outline ">
                                    Continuar
                                </button> */}
                                <Link to={`/trivias/${this.state.data.methodology}/levels`}>
                                <button className="btn btn__filled__arrow" onClick={this.goToLevels}>
                                    Continuar
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="black" fill-opacity="0.2"/>
                                        <path d="M18.96 22.1604L24 16.2804L18.96 10.4004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M24.0002 16.2803H7.2002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
        )
    }
}
