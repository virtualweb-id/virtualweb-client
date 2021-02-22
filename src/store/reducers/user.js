const initialState = {
  user: {},
  isLoading: false,
  isError: '',
  isErrorSignUp: ''
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_USER':
      return {
        ...state,
        user: payload,
        isError: ''
      }
    case 'CHANGE_ERROR':
      return {
        ...state,
        isError: payload
      }
    case 'CHANGE_ERROR_SIGNUP':
      return {
        ...state,
        isErrorSignUp: payload
      }
    case "USER_CHANGE_LOADING":
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}