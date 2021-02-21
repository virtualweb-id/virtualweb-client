export const changeState = (name, payload) => {
  return {
    type: `CHANGE_STATE_${name}`,
    name,
    payload
  }
}