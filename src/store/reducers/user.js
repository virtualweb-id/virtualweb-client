const initialState = {
  user: {},
  isLoading: false,
  isError: '',
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
    default:
      return state
  }
}