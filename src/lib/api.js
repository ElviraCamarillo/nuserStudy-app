const API_URL = 'http://localhost:8000/'
// const API_URL = {process.env.REACT_APP_URL}

async function login (email, password) {
    try {
      const response = await window.fetch(`${API_URL}/auth/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const payload = await response.json()
      console.log(payload)
      if (payload.success === false) {
        return payload
      } else {
        window.sessionStorage.setItem(
          'authorization', payload.data.token
        )
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
    const response = await window.fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...dataNewUSer })
    })
    console.log(response)
    const payload = await response.json()
    return payload
  } catch (error) {
    console.log('Error al crear nuevo usuario')
    console.log(error)
    return {
      data: {
        newPost: ''
      }
    }
  }
}

async function getUserSession (token) {
  try {
    const response = await window.fetch(`${API_URL}/users/getsession`, {
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

