const initialState = {
    comments: [],
    isLoading: false,
    isError: '',
  }
  
  export const commentReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case "COMMENT_CHANGE_COMMENTS":
        return {
          ...state,
          comments: payload
        } 
      case "COMMENT_ADD_COMMENTS":
        return {
          ...state,
          comments: [...state.comments, payload]
        } 
      case "COMMENT_LOADING":
        return {
          ...state,
          isLoading: payload
        } 
      default:
        return state
    }
  }