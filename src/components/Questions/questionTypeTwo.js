// Importar modulos
import React, { Component } from 'react'

// Import CSS
import './Question.css'




export default class QuestionTypeTwo extends Component {
  constructor(props){
      super(props);
      this.state = {
          data: this.props
      }
  }
  
  handleQuestionSelect = (event) => {
      console.log(event)
      console.log(event.target.dataset.res)  
      let responseSelect = event.target.dataset.res
      this.props.onSelectQuestion(responseSelect)

  }

  render(){
    
    console.log(this.state)
    const answers = this.state.data.data
    const correct = this.state.data.correct
    const question = this.state.data.question
    const filteredData = answers.filter(function (el) {
        return el != "";
    })
    
    return(
      <div>
        <div className="container">
            <h1 className="mt-5 mb-3 title__trivia">{question}</h1>
        </div>
        <div className="mt-5 mb-5 grid__answers">
            <div className="row">
              {
                filteredData.map((option)=> {
                  return  (
                    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                      <button class="btn btn__answer" data-res={option} onClick={this.handleQuestionSelect}>{option}</button>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    )
  }
}
