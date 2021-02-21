const initialState = {
  wedding: {
    id: 0,
    WeddingId: 0,
    title: '' ,
    date: '',
    address: '',
    groomName: '',
    brideName: '',
    groomImg: '',
    brideImg: '',
    status: false,
  },
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
        wedding: payload
      } 
    default:
      return state
  }
}