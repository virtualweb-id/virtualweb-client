const initialState = {
  guests: [],
  guest: {},
  guestAttend : [0, 0, 0],
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
    case "GUEST_ATTENDANCE":
      return {
        ...state,
        guestAttend: payload
      }  
    default:
      return state
  }
}