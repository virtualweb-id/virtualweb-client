const initialState = {
  weddings: {},
  isLoading: false,
  isError: '',
}

export const weddingReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}