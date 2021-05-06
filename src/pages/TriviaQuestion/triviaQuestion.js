// Importar modulos
import React, { Component } from 'react'
import {Card, CardDeck, ProgressBar} from 'react-bootstrap'

// Importar componentes
import NavbarH from '../../components/Navbar/navBar'
import NavbarUser from '../../components/Navbar/navBarUser'

import Footer from '../../components/footer/footer'
import TriviaQuestionOne from '../../components/Questions/questionTypeOne'
import TriviaQuestionTwo from '../../components/Questions/questionTypeTwo'
import ResponseError from '../../components/Questions/responseError'
import ResponseSucess from '../../components/Questions/responseSuccess'
import TriviaResult from '../../pages/TriviaQuestion/triviaResult'

// import imageQuestion from '../../img/image__question.png';
import Api from '../../lib/api'


// Import CSS
import './TriviaQuestion.css'



export default class TriviasQuestionPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      typeQuestion: 0,
      answers: [],
      question: '',
      idQuestion: 0,
      statusResponse:'',
      responseSelected: false,
      questionNumnber: 1,
      resultUser: '',
      isending: false
    }

  }
  componentDidMount(){
    console.log('Estoy en preguntas')
    const token = window.localStorage.getItem('tokenapp')
    const  path = this.props.location.pathname.split('/')
    const idMethodology = path[path.length - 3]
    const idLevel = path[path.length - 2]
    this.setState({
      idMethodology: idMethodology,
      idLevel: idLevel
    })
    console.log(path, idMethodology, idLevel)
    if(token == null){
      this.props.history.push(`/login`)
      return
    }
    
    async function getQuestionById (token, metId, dif){
      const questionById = await Api.getQuestionByLevel(token, metId, dif)
      return questionById
    }
  
    const questionResponse = getQuestionById(`Token ${token}`,idMethodology,idLevel)
    questionResponse.then((response)=>{
      console.log(response)
      if(!response.is_ending &&  response.is_ending !== true){

        if(response.wrong_answers){
          this.setState({
            answers: [...response.wrong_answers, response.right_answer],
            correct: response.right_answer,
            question: response.question,
            idQuestion: response.id
          })
        }
        if(response.question_type === 1) {
          this.setState({
            typeQuestion: 1
          })
        } else {
          this.setState({
            typeQuestion: 2
          })
        }
      } else {
        this.setState({
          isending: true
        })
      }
    })
    
  }
  updateProgresUser = async (token, idMethodology, idQuestion, result) => {
    const responseProgress = await Api.updateProgress(`Token ${token}`, idMethodology, idQuestion, result)
    if(responseProgress.status === 200 && responseProgress.statusText === 'OK'){
      console.log('getNextQuestion')
    }
  }

  nextQuestion = () => {
    if(this.state.responseSelected) {
      console.log('Next question')
      window.location.reload()

      // async function getQuestionById (token, metId, dif){
      //   const questionById = await Api.getQuestionByLevel(token, metId, dif)
      //   return questionById
      // }
    
      // const questionResponse = getQuestionById(`Token ${token}`,idMethodology,idLevel)
      // questionResponse.then((response)=>{
      //   if(response.wrong_answers){
      //     this.setState({
      //       answers: [...response.wrong_answers, response.right_answer],
      //       correct: response.right_answer,
      //       question: response.question,
      //       idQuestion: response.id
      //     })
      //   }
      //   if(response.question_type === 1) {
      //     this.setState({
      //       typeQuestion: 1
      //     })
      //   } else {
      //     this.setState({
      //       typeQuestion: 2
      //     })
      //   }
      // })
    }
  }
  handleSetResponse = (response) => {
    const token = window.localStorage.getItem('tokenapp')
    const  path = this.props.location.pathname.split('/')
    const idMethodology = path[path.length - 3]

    let correct = this.state.correct
    let resultUser
    response === correct ?  resultUser = 1 : resultUser = 0
    if(response === correct){
      this.setState({
        statusResponse: 'success'
      })
    } else {
      this.setState({
        statusResponse: 'error'
      })
    } 
    this.setState({
      responseSelected: true,
    })
    this.updateProgresUser(token, idMethodology, this.state.idQuestion, resultUser)
  }

  render(){
    const token =  localStorage.getItem('tokenapp')
    const  path = this.props.location.pathname.split('/')
    const idMethodology = path[path.length - 3]
    console.log(token)
    let buttonBloqued = ''
    this.state.responseSelected ? buttonBloqued = '' : buttonBloqued = 'disabled'
    return(
      <div>
        {token !== null
          ?   
          <NavbarUser/>
          :
          <NavbarH/>
        }
        {
          this.state.isending !== undefined &&
          this.state.isending === true ?
          <TriviaResult methodology={idMethodology} />
          :
          <div className="container contianer__trivia">
            <div className="mt-5 wrap__info__trivia">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <strong>Trivia</strong>
                            <span>Etapas del Proceso Cuidado Enfermero</span>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-end">
                          Nivel <b className="ml-2">{this.state.idLevel}</b>
                        </div>
                    </div>
                </div>
                
            </div>
            {
              this.state.answers &&
              this.state.correct && 
              this.state.question  ?
  
                <TriviaQuestionTwo 
                  data={this.state.answers ? this.state.answers: []} 
                  correct={this.state.correct}
                  question={this.state.question}
                  onSelectQuestion={this.handleSetResponse}
                />
              : ''
            }
            {
              this.state.statusResponse !== "" ?
                this.state.statusResponse === 'success' ? 
                <ResponseSucess/> 
                :
                <ResponseError/>
              :
              ''
            }
  
            <div className="row mb-5">
                <div className="col-12 text-center">
                  {
                    buttonBloqued != "" ?
                    <button className="btn btn__send__answer" onClick={this.nextQuestion} disabled>
                        Continuar
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="black" fillOpacity="0.2"/>
                            <path d="M18.96 22.1604L24 16.2804L18.96 10.4004" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M24.0002 16.2803H7.2002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    :
                    <button className="btn btn__send__answer" onClick={this.nextQuestion} >
                        Continuar
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="black" fillOpacity="0.2"/>
                            <path d="M18.96 22.1604L24 16.2804L18.96 10.4004" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M24.0002 16.2803H7.2002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                  }
                </div>
            </div>
          </div>
          
        }
        <Footer/>
      </div>
    )
  }
}
