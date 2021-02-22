const initialState = {
  wedding: {},
  isLoading: false,
  isError: '',
}

export const weddingReducer = (state = initialState, action) => {
  const { type, name, payload } = action
  switch (type) {
    case `CHANGE_WEDDING_STATE_${name}`:
      return {
        ...state,
        wedding: {
          ...state.wedding,
          [name]: payload
        }
      }
    case "CHANGE_WEDDING":
      return {
        ...state,
        wedding: payload,
        isLoading: false, 
        isError: ''
      } 
    case "WEDDING_CHANGE_LOADING": 
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}