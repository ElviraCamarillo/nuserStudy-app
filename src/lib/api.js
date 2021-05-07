const API_URL = 'http://localhost:8000/api/'
//const API_URL = 'http://ec2-3-140-250-35.us-east-2.compute.amazonaws.com/api/'

// const API_URL = {process.env.REACT_APP_URL}

// GET login
async function login (username, password) {
  try {
    const response = await window.fetch(`${API_URL}token-id-username/`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const payload = await response.json()
    // console.log(payload)
    if (payload.token && payload.token !== "") {
      return payload
    }
  } catch (error) {
    // console.log('error hand', error)
    return {
      message: 'Error login API',
      data: {
        token: ''
      }
    }
  }
}

// Create new user
async function newUser (dataNewUSer) {
  try {
    // console.log(dataNewUSer)
    const response = await window.fetch(`${API_URL}users/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...dataNewUSer })
    })
    const payload = await response.json()
    // console.log(payload)
    return payload
  } catch (error) {
    // console.log('Error al crear nuevo usuario')
    // console.log(error)
    return {
      data: {
        newUser: ''
      }
    }
  }
}

// GET Methodology  
async function getTriviaMethodology (token) {
  try {
    const response = await window.fetch(`${API_URL}method/`,{
      headers: { Authorization: token }
    })
    const payload = await response.json()
    // console.log(payload)
    return payload
  } catch (error) {
    // console.log('error', error)
    return {
      data: {
        methods: []
      }
    }
  }
}

//GET Max level by methodology 
async function getLevelByMethodology (token,idMethodology){
  //console.log(token, idMethodology)
  try {
    const response = await window.fetch(`${API_URL}methodology/${idMethodology}/difficulty/`,{
      headers: { authorization: token }
    })
    const payload = await response.json()
    // console.log(payload)
    return payload
  } catch (error) {
    // console.log('error', error)
    return {
      data: {
        questions: []
      }
    }
  }
}

// GET question by level and methodology
async function getQuestionByLevel (token,id_method, idLevel) {
  try {
    const response = await window.fetch(`${API_URL}questions/${id_method}/${idLevel}/`,{
      headers: { Authorization: token }
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    // console.log('error', error)
    return {
      data: {
        questionsByLevel: []
      }
    }
  }
}

// Update Progress
async function updateProgress(token, idMethodology, question_id, result) {
  try {
    const response = await window.fetch(`${API_URL}updateProgress/`, {
      headers: { 
        Authorization: token,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        methodology_id: parseInt(idMethodology),
        question_id: parseInt(question_id),
        result: parseInt(result)
      })
    })
    return response
  } catch (error) {
    return{
      data:{
        dataUpdate:[]
      }
    }
  }
}


// // GET levelByMethodologyUpdagreUser

async function levelByMethodologyUpgrade(token,id) {
  try {
    const response = await window.fetch(`${API_URL}progressbyuser/${id}/`,{
      headers: { authorization: token }
    })
    const payload = await response.json()
    //console.log(payload)
    return payload
  } catch (error) {
    return{
      data:{
        dataUpdate:[]
      }
    }
  }
}


// GET Questions
async function getTrivia(token) {
  // console.log(token)
  try {
    const response = await window.fetch(`${API_URL}questions/`,{
      headers: { authorization: token }
    })
    const payload = await response.json()
    //console.log(payload)
    return payload
  } catch (error) {
    // console.log('error', error)
    return {
      data: {
        maxLevel: 0
      }
    }
  }
}

// GET all questions
async function getAllQuestion(token){
  try {
    const response = await window.fetch(`${API_URL}answ-ques/`,{
      headers: { authorization: token }
    })
    const payload = await response.json()
    // console.log(payload)
    return payload
  } catch (error) {
    // console.log('error', error)
    return {
      data: {
        questions: []
      }
    }
  }
}


const api = {
  login,
  newUser,
  getLevelByMethodology,
  getTriviaMethodology,
  getTrivia,
  getAllQuestion,
  getQuestionByLevel,
  updateProgress,
  levelByMethodologyUpgrade
}

export default api