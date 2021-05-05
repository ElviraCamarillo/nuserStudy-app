// Importar modulos
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import NavbarUser from '../../components/Navbar/navBarUser'
import Footer from '../../components/footer/footer'

// Import CSS
import './TriviaValoration.css'

import PlayImg from '../../img/triviasLevel/play.svg'

import Api from "../../lib/api";


export default class TriviasValorationPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      maxLevel: 0,
      mapArray: [],
      idMethodology: ''
    }
  }

  componentDidMount(){
    const token = window.localStorage.getItem('tokenapp')
    const  path = this.props.location.pathname.split('/')
    const idMethodology = path[path.length - 2]
    this.setState({
      idMethodology: idMethodology
    })

    if(token == null){
      this.props.history.push(`/login`)
      return
    }

    const getMaxLevelMethodology = async (token, idMethodology) => {
      const payload = await Api.getLevelByMethodology("Token " + token, idMethodology)
      // console.log(payload)
      return payload
    }

    const maxLevelMethodology =  getMaxLevelMethodology(token, idMethodology)
    maxLevelMethodology.then( (response) => {
      // console.log(response)

      this.setState({
        maxLevel: response.difficulty__max 
      })
      let maxDifficulty = response.difficulty__max
      let mapArray = new Array(maxDifficulty); 
      for (let i = 1; i <= maxDifficulty; ++i)  { 
        mapArray[i-1] = i
      }
      // console.log(response, maxDifficulty, mapArray)
      this.setState({
        mapArray: mapArray
      })
    })
     
  }

  
  render(){
    const token =  localStorage.getItem('tokenapp')
    // console.log(token)
    
    return(
      <div>
        {token !== null
          ?   
          <NavbarUser/>
          :
          <NavbarH/>
        }
        <div className="container">
          <h1 className="mt-5">Niveles</h1>
          <p>Etapa de valoracion</p>
          <div className="row mt-5 mb-5 d-flex justify-content-between">
            {
              this.state.mapArray.map((element) => {
                // console.log(element)
                return (
                  <div className="col-12 col-md-4 mb-3">
                    <div className="cardLevel p-3">
                      <h2 className="my-3">Nivel {element}</h2>
                      <p>10 preguntas</p>
                      <button className='buttonCardLevel' >
                        <div className=" d-flex justify-content-between">
                          <p className="my-auto mr-2">Continuar</p>
                          <Link to={`/question/${this.state.idMethodology}/${element}/`}>
                            <img src={PlayImg} alt="" className="my-1"/>
                          </Link>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
