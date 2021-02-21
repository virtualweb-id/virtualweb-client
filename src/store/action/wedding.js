export const changeWeddingState = (name, payload) => {
  return {
    type: `CHANGE_WEDDING_STATE_${name}`,
    name,
    payload
  }
}