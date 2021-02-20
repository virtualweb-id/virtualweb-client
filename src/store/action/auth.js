import axios from '../../api/axios'

const changeUser = (payload) => {
  return {
    type: 'CHANGE_USER',
    payload
  }
}

const changeError = (payload) => {
  return {
    type: 'CHANGE_ERROR',
    payload
  }
}

export const signUp = (input, history) => {
  return async (dispatch) => {
    try {
      await axios({
        method: 'post',
        url: '/register',
        data: input
      })
      history.push('/login')
    } catch (err) {
      dispatch(changeError(err.response.data.message))
    }
  }
}

export const signIn = (input, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/login',
        data: input
      })
      dispatch(changeUser(data))
      localStorage.access_token = data.access_token
      localStorage.name = data.name
      history.push('/undanganku')
    } catch (err) {
      dispatch(changeError(err.response.data.message))
    }
  }
}