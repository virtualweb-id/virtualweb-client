const initialState = {
  invitation: {},
  isLoading: false,
  isError: '',
}

export const invitationReducer = (state = initialState, action) => {
  const { type, name, payload } = action
  switch (type) {
    case `CHANGE_STATE_${name}`:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          [name]: payload
        }
      }
    case 'INVITATION_CHANGE_INVITATION':
      return {
        ...state,
        invitation: payload
      }
    default:
      return state
  }
}