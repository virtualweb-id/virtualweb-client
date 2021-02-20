const initialState = {
  guests: [],
  guest: {},
  isLoading: false,
  isError: '',
}

export const guestReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "GUEST_CHANGE_GUESTS":
      return {
        ...state,
        guests: payload
      } 
    case "GUEST_ADD_GUESTS":
      return {
        ...state,
        guests: [...state.guests, payload]
      } 
    case "GUEST_CHANGE_GUEST":
      return {
        ...state,
        guest: payload
      } 
    default:
      return state
  }
}