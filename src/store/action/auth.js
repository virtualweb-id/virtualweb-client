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

export const signUp = (input) => {
  return async (dispatch) => {
    try {
      await axios({
        method: 'post',
        url: '/register',
        data: input
      })
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
    } catch (err) {
      dispatch(changeError(err.response.data.message))
    }
  }
}