import axios from '../../api/axios'
import { createToast } from '../../helpers/createToast'

const changeUser = (payload) => {
  return {
    type: 'CHANGE_USER',
    payload
  }
}

const changeLoading = (payload) => {
  return {
    type: 'USER_CHANGE_LOADING',
    payload
  }
}

const changeError = (payload) => {
  return {
    type: 'CHANGE_ERROR',
    payload
  }
}

const changeErrorSignUp = (payload) => {
  return {
    type: 'CHANGE_ERROR_SIGNUP',
    payload
  }
}

export const signUp = (input, history) => {
  return async (dispatch) => {
    try {
      dispatch(changeLoading(true))
      await axios({
        method: 'post',
        url: '/register',
        data: input
      })
      history.push('/login')
    } catch (err) {
      createToast(err.response.data.message[0], 'error')
      dispatch(changeErrorSignUp(err.response.data.message))
    } finally {
      dispatch(changeLoading(false))
    }
  }
}

export const signIn = (input, history) => {
  return async (dispatch) => {
    try {
      dispatch(changeLoading(true))
      const { data } = await axios({
        method: 'post',
        url: '/login',
        data: input
      })
      dispatch(changeUser(data))
      localStorage.access_token = data.access_token
      localStorage.name = data.name
      history.push('/dashboard')
    } catch (err) {
      dispatch(changeError(err.response.data.message))
    } finally {
      dispatch(changeLoading(false))
    }
  }
}
