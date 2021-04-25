// Importar modulos
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import Footer from '../../components/footer/footer'

// Import CSS
import './QuizzComplete.css'

//import images
import arrowBtnError from '../../img/img-btn-error.svg'
import iPhase1 from '../../img/img-phase-1.svg'
import iPhase2 from '../../img/img-phase-2.svg'

export default class QuizzComplete extends Component {
  render(){
    return(
      <div className="">

        <NavbarH/>
        <div className="container">
            <div className=" row  mb-5 justify-content-center">
                <div className="cardComplete col-12 col-md-8  d-flex  justify-content-center align-item-center">
                    <div className=" col-6">
                        <h1 className="textCardStart mt-4">¿Felicidades!</h1>
                        <p>has terminado esta trivia</p>
                        <h2>*** de ** correctas</h2>       
                        <Button bsPrefix="buttonCardStart mt-3 mb-3" ><a>Ir a inicio</a></Button>
                        <Button bsPrefix="buttonCardStart mt-3 mb-3" ><a>Volver a Menú</a> 
                        <img src={arrowBtnError}alt="" className="ml-4"/>
                        </Button>       
                    </div>
                    
                </div>
            </div>

                    
        </div>{/*cierre Div container general */}
        <Footer/>
        </div>
    )
  }
}