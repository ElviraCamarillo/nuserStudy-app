const API_URL = 'http://localhost:8000/api/'
// const API_URL = {process.env.REACT_APP_URL}

async function login (username, password) {
    try {
      const response = await window.fetch(`${API_URL}users/login/`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      const payload = await response.json()
      console.log(payload)
      if (payload.token && payload.token !== "") {
        return payload
      }
    } catch (error) {
      console.log('error hand', error)
      return {
        message: 'Error login API',
        data: {
          token: ''
        }
      }
    }
  }

async function newUser (dataNewUSer) {
  try {
    console.log(dataNewUSer)
    const response = await window.fetch(`${API_URL}users/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...dataNewUSer })
    })
    const payload = await response.json()
    console.log(payload)
    return payload
  } catch (error) {
    console.log('Error al crear nuevo usuario')
    console.log(error)
    return {
      data: {
        newUser: ''
      }
    }
  }
}

async function getUserSession (token) {
  try {
    const response = await window.fetch(`${API_URL}/api-token-auth/`, {
      headers: { authorization: token }
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    console.log('error', error)
    return {
      data: {
        session: []
      }
    }
  }
}


const api = {
  login,
  newUser,
  getUserSession
}

export default api

